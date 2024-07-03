"use client";

import { FormEvent } from "../FormEvent";
import { ModalAddEventProps } from "./ModalAddEvent.types";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function ModalAddEvent(props: ModalAddEventProps) {

    const { open, companies, setNewEvent, setOnSaveNewEvent, setOpen } = props;
    return (

        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add a new Event</DialogTitle>
                </DialogHeader>
                <FormEvent
                    setOnSaveNewEvent={setOnSaveNewEvent}
                    companies={companies}
                    setNewEvent={setNewEvent}
                    setOpen={setOpen}
                />
            </DialogContent>
        </Dialog>
    )
}
