import { Alert } from "@solid-kit/ui";

export function AlertDemo() {
  return (
    <div class="grid w-full max-w-md gap-4">
      <Alert>
        <Alert.Title>Heads up</Alert.Title>
        <Alert.Description>You can change this later.</Alert.Description>
      </Alert>
      <Alert variant="destructive">
        <Alert.Title>Payment failed</Alert.Title>
        <Alert.Description>Check your card details and try again.</Alert.Description>
      </Alert>
    </div>
  );
}
