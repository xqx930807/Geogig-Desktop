// toaster.ts
import { Position, Toaster } from "@blueprintjs/core";

export const OurToaster = Toaster.create({
    className: "my-toaster",
    position: Position.BOTTOM_RIGHT,
});
