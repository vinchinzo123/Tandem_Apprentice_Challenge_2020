import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Timer } from "./components/Timer";
import { StartButton } from "./components/StartButton";
import Store from "./Store";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  jest.useFakeTimers();
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

it("renders Header", () => {
  act(() => {
    render(<Header />, container);
  });
  expect(container.textContent).toBe("tandem trivia");
});

it("renders Button with properly passed props", () => {
  act(() => {
    render(<Button text={"testing text"} />, container);
  });
  expect(container.textContent).toBe("testing text");
});

test("renders StartButton with out props", () => {
  act(() => {
    render(
      <Store>
        <StartButton />
      </Store>,
      container
    );
  });
  expect(container.textContent).toBe("Play Some Trivia!");
});

test("renders StartButton with message prop", () => {
  act(() => {
    render(
      <Store>
        <StartButton message={"Don't play trivia"} />
      </Store>,
      container
    );
  });
  expect(container.textContent).toBe("Don't play trivia");
});

test("time component renders", () => {
  act(() => {
    render(<Timer />, container);
  });
  expect(container.textContent).toBe("30");
});

test("time component counts down each second", () => {
  act(() => {
    render(<Timer />, container);
    jest.advanceTimersByTime(1000);
  });
  expect(container.textContent).toBe("29");
});

test("time component counts down each for 30 seconds to 0", () => {
  act(() => {
    render(<Timer />, container);
    jest.advanceTimersByTime(30000);
  });
  expect(container.textContent).toBe("0");
});

test("time component is null at and after 31 seconds", () => {
  act(() => {
    render(<Timer />, container);
    jest.advanceTimersByTime(31000);
  });
  expect(container.textContent).toBeFalsy();
});
