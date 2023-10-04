import { SignIn } from "@clerk/nextjs";
import "../../home.css";

export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: {
              fontSize: 14,
              textTransform: "none",
              backgroundColor: "#611BBD",
              "&:hover, &:focus, &:active": {
                backgroundColor: "#49247A",
              },
            },
          },
        }}
      />
    </div>
  );
}
