"use client";

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col gap-10 justify-center items-center min-h-screen font-montserrat p-10 text-center">
            <div className="flex flex-col items-center max-w-3xl">
                <h1 className="text-4xl font-bold header-color mb-4">Privacy Policy</h1>
                <p className="text-sm description-color mb-8">Last updated: 10 August 2025</p>

                <div className="flex flex-col gap-6 text-left description-color">
                    <p>
                        We respect your privacy.
                    </p>
                    <p>
                        When you sign up as a beta tester for RepBuddy, we collect your email address.
                        We use this information for the following purposes:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>To contact you about beta testing opportunities and updates related to RepBuddy.</li>
                        <li>To send you occasional marketing emails about RepBuddy features, launches, and offers.</li>
                        <li>To communicate with you regarding any matters directly related to RepBuddy.</li>
                    </ul>
                    <p>
                        We do not sell or share your email address with any third parties.
                        Your information is stored securely in our database and is not publicly accessible.
                    </p>
                    <p>
                        You may unsubscribe from marketing emails at any time by following the link provided in our emails
                        or by contacting us directly. If you wish to have your email removed from our records entirely,
                        you can contact us at <span className="font-semibold">contact@repbuddy.org</span>, and we will delete it.
                    </p>
                </div>
            </div>
        </div>
    );
}
