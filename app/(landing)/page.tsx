import { SignInButton, SignedOut } from '@clerk/nextjs'

const LandingPage = () => {
    return (
        <>
            <p>Landing Page(Unprotected)</p>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </>
    );
}

export default LandingPage;