import type { CSSProperties, ReactNode } from "react";
import { css } from "./css";

export type TextFieldBaseProps = {
  label: string;
  render: (_: { placeholder: string; style: CSSProperties }) => ReactNode;
};

export function TextFieldBase({ label, render }: TextFieldBaseProps) {
  return (
    <label
      className="group"
      style={{
        display: "grid",
        marginTop: "-0.375em",
      }}
    >
      <fieldset
        aria-hidden="true"
        style={css({
          transition: "border linear 150ms",
          margin: 0,
          paddingInline: "0.75em",
          gridRow: 1,
          gridColumn: 1,
          borderRadius: 4,
          border: "1px solid #fff",
          on: $ => [
            $(".group:focus-within &", {
              border: "2px solid #36cdb2",
            }),
          ],
        })}
      >
        <legend
          style={css({
            paddingInline: "2px",
            visibility: "hidden",
            fontSize: "0.875em",
            whiteSpace: "nowrap",
            on: ($, { and, not }) => [
              $(
                and(
                  not(".group:focus-within &"),
                  ".group:has(:placeholder-shown) &",
                ),
                {
                  width: 0,
                  padding: 0,
                },
              ),
            ],
          })}
        >
          {label}
        </legend>
      </fieldset>
      <div
        style={css({
          gridRow: 1,
          gridColumn: 1,
          margin: "calc(0.75em + 4px)",
          marginTop: "calc(1.25em + 4px)",
          transition: "transform linear 150ms",
          on: ($, { not, or }) => [
            $(
              or(
                ".group:focus-within &",
                not(".group:has(:placeholder-shown) &"),
              ),
              {
                transform: "translateY(calc(-1.375em - 4px))",
              },
            ),
          ],
        })}
      >
        <span
          style={css({
            transitionProperty: "font-size, color",
            transitionDuration: "150ms",
            transitionTimingFunction: "linear",
            on: ($, { or, not }) => [
              $(
                or(
                  ".group:focus-within &",
                  not(".group:has(:placeholder-shown) &"),
                ),
                {
                  fontSize: "0.875em",
                },
              ),
              $(".group:focus-within &", {
                color: "#36cdb2",
              }),
            ],
          })}
        >
          {label}
        </span>
      </div>
      {render({
        placeholder: " ",
        style: {
          gridRow: 1,
          gridColumn: 1,
          border: 0,
          padding: 0,
          margin: "calc(0.75em + 4px)",
          marginTop: "calc(1.25em + 4px)",
          outline: 0,
          background: "transparent",
          color: "inherit",
          font: "inherit",
        },
      })}
    </label>
  );
}

export type BasicTextFieldProps = Omit<TextFieldBaseProps, "render">;

export function BasicTextField(props: BasicTextFieldProps) {
  return <TextFieldBase {...props} render={props => <input {...props} />} />;
}
