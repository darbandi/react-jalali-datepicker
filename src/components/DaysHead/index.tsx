import * as React from "react";
import { IDaysHeadProps } from "./types";
import { DaysHeadContainer, HeadRange, HeadTitle, TimeTitle } from "./styled";
import { fa } from "../../utils";

export const DaysHead: React.FunctionComponent<IDaysHeadProps> = ({
  monthName,
  datePickerStatus,
  ArrowRight,
  ArrowLeft,
  decreaseMonth,
  increaseMonth,
  timePickerView,
  hour,
  minute,
}) => {
  if (timePickerView) {
    return (
      <DaysHeadContainer data-testid="days-head">
        <TimeTitle>
          {fa(hour)} : {fa(minute)}
        </TimeTitle>
      </DaysHeadContainer>
    );
  }
  return (
    <DaysHeadContainer data-testid="days-head">
      <HeadTitle data-testid="days-head-title">
        <ArrowRight onClick={decreaseMonth} />
        <p data-testid="days-head-title-text">{monthName}</p>
        <ArrowLeft onClick={increaseMonth} />
      </HeadTitle>
      <HeadRange data-testid="days-head-range">{datePickerStatus}</HeadRange>
    </DaysHeadContainer>
  );
};
