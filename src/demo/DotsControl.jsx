import React from "react";

export const DotControls = ({ dotsProps, setDotsProps }) => {
  const controls = [
    {
      id: "are-dots-set",
      title: "Are visible",
      name: "areDotsSet",
      Field: (props) => <select {...props} />,
      options: [true, false],
      defaultValue: dotsProps.areDotsSet,
      changeProp: "select",
    },
    {
      id: "dot-color",
      title: "Color",
      name: "dotColor",
      Field: (props) => <input {...props} />,
      type: "color",
      defaultValue: dotsProps.dotColor,
    },
    {
      id: "dot-size",
      title: "Dot Size",
      name: "dotSize",
      Field: (props) => <input {...props} />,
      type: "number",
      defaultValue: dotsProps.dotSize,
    },
    {
      id: "dot-radius",
      title: "Dot Radius",
      name: "dotRadius",
      Field: (props) => <input {...props} />,
      type: "number",
      defaultValue: dotsProps.dotRadius,
    },
    {
      id: "dot-spacing",
      title: "Dot Spacing",
      name: "dotSpacing",
      Field: (props) => <input {...props} />,
      type: "number",
      defaultValue: dotsProps.dotSpacing,
    },
    {
      id: "dots-position",
      title: "Position",
      name: "position",
      Field: (props) => <select {...props} />,
      options: ["top", "center", "bottom", "bottomOutside"],
      defaultValue: dotsProps.position,
      changeProp: "select",
    },
  ];

  return (
    <div className="control">
      <h2>Dots</h2>
      {controls.map(
        ({
          id,
          title,
          name,
          Field,
          type,
          defaultValue,
          changeProp,
          options,
        }) => {
          return (
            <div key={id}>
              <label htmlFor={id}>{title}</label>
              <Field
                id={id}
                name={name}
                type={type ?? undefined}
                defaultValue={defaultValue}
                onChange={({ target }) => {
                  const action = (targetValue) => {
                    if (typeof targetValue === "number")
                      return parseInt(target.value, 10);
                    if (targetValue === "true") return true;
                    if (targetValue === "false") return false;
                    if (typeof targetValue === "string") {
                      return target.value;
                    }
                  };
                  return setDotsProps((prev) => ({
                    ...prev,
                    [target.name]: action(target.value),
                  }));
                }}
              >
                {changeProp === "select"
                  ? options.map((option) => {
                      return (
                        <option key={option} value={option}>
                          {option.toString()}
                        </option>
                      );
                    })
                  : null}
              </Field>
            </div>
          );
        }
      )}
    </div>
  );
};
