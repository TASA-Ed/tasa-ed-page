import { useState } from "react";

export function useScrollTo() {
    const [open, setOpen] = useState(false);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
    };

    return { open, setOpen, scrollTo };
}