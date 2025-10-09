import { FieldOptionDropdown } from "./field-option-dropdown";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

import type { FieldProps } from "./types";

export function TextField({ field, columnInput }: FieldProps) {
  const placeholder =
    field.value === "" && columnInput.defaultValue
      ? "DEFAULT VALUE"
      : field.value === null
        ? "NULL"
        : "EMPTY";

  return (
    <ButtonGroup className="w-full">
      <ButtonGroup className="w-full">
        <Input
          type={columnInput.type}
          {...field}
          value={field.value as string}
          placeholder={placeholder}
          disabled={columnInput.disabled}
        />
      </ButtonGroup>
      <FieldOptionDropdown
        columnInput={columnInput}
        setValue={(value) => {
          field.onChange(value);
        }}
      />
    </ButtonGroup>
  );
}
