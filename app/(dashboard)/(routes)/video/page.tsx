"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Heading } from "@/components/heading";
import { VideoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";

const VideoPage = () => {
    const proModal = useProModal();
    const router = useRouter();
    const [video, setVideo] = useState<string>()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setVideo(undefined);

            const response = await axios.post("/api/video", values);

            setVideo(response.data[0]);

            form.reset();
        } catch (error: any) {
            if (error?.response?.status === 403) {
                proModal.onOpen();
            }
            else {
                toast.error("something went wrong");
            }
        } finally {
            router.refresh();
        }
    };

    return (
        <div>
            <Heading
                title="Video Generation"
                description="Turn your prompts into video" 
                icon={VideoIcon}
                iconColor="text-[#fd3b4b]"
                bgColor="bg-orange-700/10"    
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} 
                        className="rounded-lg border w-full p-4 px-3 md:px-6 
                        grid grid-cols-12 gap-2 focus-within:shadow-sm">
                            <FormField name="prompt"
                                render={({field}) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input 
                                                className="border-0 outline-none focus-visible:ring-offset-0
                                                focus-visible:ring-0 focus-within:ring-transparent"
                                                disabled={isLoading}
                                                placeholder="horse running on a green plateau..."
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button className="col-span-12 lg:col-span-2 w-full"
                                disabled={isLoading}>
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    {isLoading && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                            <Loader/>
                        </div>
                    )}
                    { !video && !isLoading && (
                        <Empty label="No video generated"/>
                    )}
                    <div>
                        {video && (
                            <video className="w-full aspect-video mt-8 rounded-lg border bg-black" controls>
                                <source src={video}/>
                            </video>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPage;