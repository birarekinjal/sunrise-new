import React from 'react';
import PropTypes from 'prop-types';
import { default as ReactSelect, components } from 'react-select';
import makeAnimated from 'react-select/animated';

const CheckboxDropdown = (props: any) => {
  const animatedComponents = makeAnimated();

  const Option = () => {
    return (
      <>
        <components.Option {...props}>
          <input
            type="checkbox"
            value={props.isSelected}
            checked={props.isSelected}
          />
          {''}
          <label>{props.label}</label>
        </components.Option>
      </>
    );
  };

  const MultiValue = () => (
    <components.MultiValue {...props}>
      <span>{props.data.label}</span>
    </components.MultiValue>
  );

  if (props.allowSelectAll) {
    return (
      <>
        <ReactSelect
          {...props}
          components={{ MultiValue, Option, animatedComponents }}
          isMulti
          hideSelectedOptions={false}
          closeMenuOnSelect={false}
          options={[props.allOption, ...props.options]}
          onChange={(selected: any) => {
            if (
              selected !== null &&
              selected.length > 0 &&
              selected[selected.length - 1].value === props.allOption.value
            ) {
              return props.onChange(props.options);
            }
            return props.onChange(selected);
          }}
        />
      </>
    );
  }

  return <ReactSelect {...props} />;
};

CheckboxDropdown.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  allowSelectAll: PropTypes.bool,
  closeMenuOnSelect: PropTypes.bool,
  hideSelectedOptions: PropTypes.bool,
  components: PropTypes.any,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};

CheckboxDropdown.defaultProps = {
  allOption: {
    label: 'Select all',
    value: '*',
  },
};

export default CheckboxDropdown;
