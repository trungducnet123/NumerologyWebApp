import moment from "moment";
import { FC, useRef, useEffect, ChangeEvent } from "react";
import { Input, InputGroup } from "./";
import { InputProps } from "../Utils/types";

type PropTypes = InputProps & {
   // eslint-disable-next-line no-unused-vars
   getValue?: (dateTime: string) => void;
   //    value?: string;
   defaultValue?: string;
};
export const InputDate: FC<PropTypes> = (props) => {
   const { getValue, defaultValue = "", ...rest } = props;
   const refDate = useRef<HTMLInputElement>(null);
   const refMonth = useRef<HTMLInputElement>(null);
   const refYear = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (
         defaultValue &&
         refDate.current &&
         refMonth.current &&
         refYear.current
      ) {
         const splitDate = defaultValue.split("-");
         refDate.current.value = splitDate[2];
         refMonth.current.value = splitDate[1];
         refYear.current.value = splitDate[0];
      }
   }, []);

   const handleChange = () => {
      const date: string = refDate.current?.value ?? "";
      const month: string = refMonth.current?.value ?? "";
      const year: string = refYear.current?.value ?? "";

      if (typeof getValue === "function") {
         getValue(moment(year + "-" + month + "-" + date).format("YYYY-MM-DD"));
      }
   };
   return (
      <InputGroup>
         <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
               const value = e.target.value;
               if (value.length >= 2) {
                  refMonth.current?.select();
               }
               handleChange();
            }}
            onFocus={(e) => e.target.select()}
            ref={refDate}
            textAlign="center"
            type="number"
            defaultValue={1}
            min={1}
            max={31}
            placeholder="ngày sinh"
            {...rest}
         />
         <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
               const value = e.target.value;
               if (value.length >= 2) {
                  refYear.current?.select();
               }
               handleChange();
            }}
            onFocus={(e) => e.target.select()}
            ref={refMonth}
            type="number"
            defaultValue={1}
            textAlign="center"
            placeholder="tháng sinh"
            min={1}
            max={12}
            {...rest}
         />
         <Input
            onChange={handleChange}
            onFocus={(e) => e.target.select()}
            ref={refYear}
            defaultValue={1982}
            textAlign="center"
            type="number"
            placeholder="năm sinh"
            {...rest}
         />
      </InputGroup>
   );
};
