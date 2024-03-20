import React from "react";
import { create } from "react-test-renderer";
import { ProfileStatus } from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be correct", () => {
    const component = create(<ProfileStatus status={"test-props"} updateStatusTC={() => {}} />);
    const instance = component.getInstance();
    expect(instance?.props.status).toBe("test-props");
  });
  test("after creation span should be displayed", () => {
    const component = create(<ProfileStatus status={"test"} updateStatusTC={() => {}} />);
    const root = component.root;
    const span = root?.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creation input should not be displayed", () => {
    const component = create(<ProfileStatus status={"test-input"} updateStatusTC={() => {}} />);
    const root = component.root;
    expect(() => root?.findByType("input")).toThrow();
  });
  test("after creation span should be displayed with correct status", () => {
    const component = create(<ProfileStatus status={"test-correct"} updateStatusTC={() => {}} />);
    const root = component.root;
    const span = root?.findByType("span");
    expect(span?.children[0]).toBe('test-correct')
  });
});
