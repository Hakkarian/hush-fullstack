import styled, { css } from "styled-components";

interface Props {
    minPhone: string;
    max: string
}

export const responsive = (min = "480px", max = "") => css`
  @media screen and (min-width: $breakpointXS) {
    @content (1);
  }
  @media screen and (min-width: $breakpointSM) {
    @content (1.2);
  }
  @media screen and (min-width: $breakpointMD) {
    @content (1.6);
  }
`;