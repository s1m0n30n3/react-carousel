import React from "react";

export const ArrowControls = ({ arrowProps, setArrowProps }) => {
  const controls = [
    {
      id: "are-arrows-set",
      title: "Are visible",
      name: "areArrowsSet",
      Field: (props) => <select {...props} />,
      options: [true, false],
      defaultValue: arrowProps.areArrowsSet,
      changeProp: "select",
    },
    {
      id: "arrow-color",
      title: "Color",
      name: "arrowColor",
      Field: (props) => <input {...props} />,
      type: "color",
      defaultValue: arrowProps.arrowColor,
    },
    {
      id: "arrow-bg-color",
      title: "Background Color",
      name: "arrowBackground",
      Field: (props) => <input {...props} />,
      type: "color",
      defaultValue: arrowProps.arrowBackground,
    },
    {
      id: "arrow-icon-size",
      title: "SVG Icon Size",
      name: "arrowIconSize",
      Field: (props) => <input {...props} />,
      type: "number",
      defaultValue: arrowProps.arrowIconSize,
    },
    {
      id: "arrow-outer-size",
      title: "Outer Icon Size",
      name: "arrowSize",
      Field: (props) => <input {...props} />,
      type: "number",
      defaultValue: arrowProps.arrowSize,
    },
    {
      id: "arrow-outer-radius",
      title: "Outer Icon Radius",
      name: "arrowRounding",
      Field: (props) => <input {...props} />,
      type: "number",
      defaultValue: arrowProps.arrowRounding,
    },
  ];

  return (
    <div className="control">
      <h2>Arrows</h2>
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
                onChange={(event) => {
                  const action = (targetValue) => {
                    if (typeof targetValue === "number")
                      return parseInt(event.target.value, 10);
                    if (targetValue === "true") return true;
                    if (targetValue === "false") return false;
                    if (typeof targetValue === "string") {
                      return event.target.value;
                    }
                  };
                  return setArrowProps((prev) => ({
                    ...prev,
                    [event.target.name]: action(event.target.value),
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
