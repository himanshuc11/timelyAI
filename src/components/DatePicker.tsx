import "react-day-picker/dist/style.css";
import { Button } from "@chakra-ui/react";

type Props = {
  date?: Date | null;
  updateParent: (date: Date) => void;
};

import { useRef, useState } from "react";
import FocusTrap from "focus-trap-react";
import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
import { usePopper } from "react-popper";
import { format } from "date-fns";

export default function DatePickerDialog(props: Props) {
  const [selected, setSelected] = useState<Date>(
    props?.date ? new Date(props.date) : new Date()
  );
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const popperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const popper = usePopper(popperRef.current, popperElement, {
    placement: "bottom-start",
  });

  const closePopper = () => {
    setIsPopperOpen(false);
    buttonRef?.current?.focus();
  };

  const handleButtonClick = () => {
    setIsPopperOpen(!isPopperOpen);
  };

  const handleDaySelect: SelectSingleEventHandler = (date) => {
    if (date) {
      setSelected(date);
      props.updateParent(date);
    }
    closePopper();
  };

  return (
    <div className="w-full text-left">
      <div ref={popperRef} className="w-full text-left">
        <Button
          ref={buttonRef}
          type="button"
          aria-label="Pick a date"
          onClick={handleButtonClick}
          className="w-full"
        >
          <p className="w-full  text-left">
            {selected ? format(selected, "dd MMM yy") : "Pick a date"}
          </p>
        </Button>
      </div>
      {isPopperOpen ? (
        <FocusTrap
          active={isPopperOpen}
          focusTrapOptions={{
            initialFocus: false,
            // @ts-ignore
            allowOutsideClick: (e: MouseEvent): boolean => {
              if (
                buttonRef.current &&
                e.target instanceof Node &&
                buttonRef.current.contains(e.target)
              ) {
                return true;
              } else {
                setIsPopperOpen(false);
                return false;
              }
            },
          }}
        >
          <div
            tabIndex={-1}
            style={{ ...popper.styles.popper, zIndex: 2 }}
            className="dialog-sheet bg-[#FFFFFF] border border-[#6938EF] p-2 rounded-lg shadow-md"
            {...popper.attributes.popper}
            ref={setPopperElement}
            role="dialog"
            aria-label="DayPicker calendar"
          >
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={handleDaySelect}
              modifiersClassNames={{
                selected: "bg-[#6938EF] text-[#F3F4F6]",
              }}
              disabled={{ before: new Date() }}
            />
          </div>
        </FocusTrap>
      ) : null}
    </div>
  );
}
