import { Button } from "./Button";

export function App() {
  return (
    <>
      <Button variant="primary" /> {/* Propriedade variant personalizada */}
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button variant="error" />
    </>
  );
}