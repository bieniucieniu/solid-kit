import { DocsPage } from "~/components/preview";
import { InputOTPDemo } from "~/demos/ui/input-otp";
import source from "~/demos/ui/input-otp.tsx?raw";

const snippet = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPInput,
  InputOTPSeparator,
  InputOTPSlot,
} from "@solid-kit/ui";

<InputOTP maxLength={6} onComplete={(code) => verify(code)}>
  <InputOTPInput />
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`;

export default function InputOTPPage() {
  return (
    <DocsPage
      title="Input OTP"
      description="A one-time code input with a slot per character."
      snippet={snippet}
      source={source}
      sourceTitle="demos/ui/input-otp.tsx"
    >
      <InputOTPDemo />
    </DocsPage>
  );
}
