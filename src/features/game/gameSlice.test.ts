// import React from "react";
// import { rest } from "msw";
// import { setupServer } from "msw/node";
// // We're using our own custom render function and not RTL's render.
// // Our custom utils also re-export everything from RTL
// // so we can import fireEvent and screen here as well
// import { render, fireEvent, screen } from "../../test-utils";
// import App from "../../";

// // We use msw to intercept the network request during the test,
// // and return the response 'John Smith' after 150ms
// // when receiving a get request to the `/api/user` endpoint
// export const handlers = [
//   rest.get("/api/user", (req, res, ctx) => {
//     return res(ctx.json("John Smith"), ctx.delay(150));
//   })
// ];

// const server = setupServer(...handlers);

// // Enable API mocking before tests.
// beforeAll(() => server.listen());

// // Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers());

// // Disable API mocking after the tests are done.
// afterAll(() => server.close());

// it("it should display date error when invalid date is entered", async () => {
//   fireEvent.input(screen.getByLabelText("Client Id"), {
//     target: {
//       value: mockTransaction.client_id
//     }
//   });

//   fireEvent.input(screen.getByLabelText("Amount"), {
//     target: {
//       value: mockTransaction.amount
//     }
//   });

//   fireEvent.input(screen.getByLabelText("Date"), {
//     target: {
//       value: "Invalid Date"
//     }
//   });
//   fireEvent.keyDown(screen.getByText("Select..."), {
//     key: "ArrowDown"
//   });
//   await screen.findByText("USD");
//   fireEvent.click(screen.getByText("USD"));
//   fireEvent.submit(screen.getByRole("button"));

//   expect(await screen.findAllByRole("alert")).toHaveLength(1);
//   expect(mockFormSubmit).not.toBeCalled();
//   expect(screen.getByText(typeErrorMessages.invalidDate)).toBeInTheDocument();
// });
