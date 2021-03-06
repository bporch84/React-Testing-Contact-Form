import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import ContactForm from "./ContactForm"

describe("Tests ContactForm", () => {

    test("renders ContactForm w/o errors", () => {
        render(<ContactForm />)
    });

    test("user can fill out and submit form", () => {
        
        //Arrange: Render our Component
        render(<ContactForm />)

        //Act: Query each input
        const fNameInput = screen.getByLabelText(/first name/i),
              lNameInput = screen.getByLabelText(/last name/i),
              emailInput = screen.getByLabelText(/email/i),
              messageInput = screen.getByLabelText(/message/i),
              btnInput = screen.getByTestId(/btn/i);

        //Act: Fill out our forms
        fireEvent.change(fNameInput, { target: { value: "Patrick" }});
        fireEvent.change(lNameInput, { target: { value: "Bateman" }});
        fireEvent.change(emailInput, { target: { value: "PBateman@AmericaPsycho.com" }});
        fireEvent.change(messageInput, { target: { value: "I have to return some videotapes." }});
        

        //Act: Click on button
        fireEvent.click(btnInput);


        //Assert: Test that our form input exists on the page
        const newData1 = screen.findByText(/patrick/i),
              newData2 = screen.findByText(/bateman/i),
              newData3 = screen.findByText(/PBateman@AmericaPsycho.com/i),
              newData4 = screen.findByText(/I have to return some videotapes./i);

        expect(newData1).toBeTruthy();
        expect(newData2).toBeTruthy();
        expect(newData3).toBeTruthy();
        expect(newData4).toBeTruthy();

    });
});