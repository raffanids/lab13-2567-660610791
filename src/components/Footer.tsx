import { footerProps } from "@lib/types";

export default function Footer(probs: footerProps) {
  return (
    <div className="mt-3">
      <hr />
      <p className="text-secondary text-center">Copyright © {probs.year} {probs.fullName} {probs.studentId} </p>
    </div>
  );
}
