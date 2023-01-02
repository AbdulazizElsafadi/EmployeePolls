import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import thunk from "redux-thunk";
import image from "../utils/Abdulaziz.jpeg";
import Dashboard from "../components/Dashboard";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Nav from "../components/Nav";
import NewPoll from "../components/NewPoll";

describe("Testing _saveQuestion behavior", () => {
  it("Test1: _saveQuestion should return a question object when right input are being passed", async () => {
    const data = {
      optionOneText: "Being FrontEnd Engineer",
      optionTwoText: "Being BackEnd Engineer",
      author: "Abdulaziz",
    };
    const question = await _saveQuestion(data);
    expect(question.author).toEqual("Abdulaziz");
    expect(question.optionOne.text).toEqual("Being FrontEnd Engineer");
    expect(question.optionTwo.text).toEqual("Being BackEnd Engineer");
  });

  it("Test2: _saveQuestion should return an error message when input field is missing or passed wrongly", async () => {
    const data = {
      optionTwoText: "Being BackEnd Engineer",
      author: "Abdulaziz",
    };
    await expect(_saveQuestion(data)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("Testing _saveQuestionAnswer behavior", () => {
  it("Test3: _saveQuestionAnswer should return true if data being passed are correct", async () => {
    const data = {
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "Being BackEnd Engineer",
      authedUser: "Abdulaziz",
    };
    await expect(_saveQuestionAnswer(data)).toBeTruthy();
  });

  it("Test4: _saveQuestionAnswer should return false data passed are missing entered wrongly wrongly", async () => {
    const data = {
      qid: "8xf0y6ziyjabvozdd253nd",
      authedUser: "Abdulaziz",
    };
    await expect(_saveQuestionAnswer(data)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});

describe("Testing snapshot Dashboard", () => {
  it("Test5: Making sure that Dashboard is rendered correctly", () => {
    const initState = {
      users: {
        sarahedo: {
          id: "sarahedo",
          password: "password123",
          name: "Sarah Edo",
          avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
          answers: {
            "8xf0y6ziyjabvozdd253nd": "optionOne",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            am8ehyc8byjqgar0jgpub9: "optionTwo",
            loxhs1bqm25b708cmbf3g: "optionTwo",
          },
          questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
        },
        tylermcginnis: {
          id: "tylermcginnis",
          password: "abc321",
          name: "Tyler McGinnis",
          avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
          answers: {
            vthrdm985a262al8qx3do: "optionOne",
            xj352vofupe1dqz9emx13r: "optionTwo",
          },
          questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
        },
        mtsamis: {
          id: "mtsamis",
          password: "xyz123",
          name: "Mike Tsamis",
          avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
          answers: {
            xj352vofupe1dqz9emx13r: "optionOne",
            vthrdm985a262al8qx3do: "optionTwo",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
          },
          questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
        },
        Abdulaziz: {
          id: "Abdulaziz",
          password: "1234",
          name: "Abdulaziz Alsafadi",
          avatarURL: image,
          answers: {
            xj352vofupe1dqz9emx13r: "optionOne",
          },
          questions: [],
        },
      },

      questions: {
        "8xf0y6ziyjabvozdd253nd": {
          id: "8xf0y6ziyjabvozdd253nd",
          author: "sarahedo",
          timestamp: 1467166872634,
          optionOne: {
            votes: ["sarahedo"],
            text: "Build our new application with Javascript",
          },
          optionTwo: {
            votes: [],
            text: "Build our new application with Typescript",
          },
        },
        "6ni6ok3ym7mf1p33lnez": {
          id: "6ni6ok3ym7mf1p33lnez",
          author: "mtsamis",
          timestamp: 1468479767190,
          optionOne: {
            votes: [],
            text: "hire more frontend developers",
          },
          optionTwo: {
            votes: ["mtsamis", "sarahedo"],
            text: "hire more backend developers",
          },
        },
        am8ehyc8byjqgar0jgpub9: {
          id: "am8ehyc8byjqgar0jgpub9",
          author: "sarahedo",
          timestamp: 1488579767190,
          optionOne: {
            votes: [],
            text: "conduct a release retrospective 1 week after a release",
          },
          optionTwo: {
            votes: ["sarahedo"],
            text: "conduct release retrospectives quarterly",
          },
        },
        loxhs1bqm25b708cmbf3g: {
          id: "loxhs1bqm25b708cmbf3g",
          author: "tylermcginnis",
          timestamp: 1482579767190,
          optionOne: {
            votes: [],
            text: "have code reviews conducted by peers",
          },
          optionTwo: {
            votes: ["sarahedo"],
            text: "have code reviews conducted by managers",
          },
        },
        vthrdm985a262al8qx3do: {
          id: "vthrdm985a262al8qx3do",
          author: "tylermcginnis",
          timestamp: 1489579767190,
          optionOne: {
            votes: ["tylermcginnis"],
            text: "take a course on ReactJS",
          },
          optionTwo: {
            votes: ["mtsamis"],
            text: "take a course on unit testing with Jest",
          },
        },
        xj352vofupe1dqz9emx13r: {
          id: "xj352vofupe1dqz9emx13r",
          author: "mtsamis",
          timestamp: 1493579767190,
          optionOne: {
            votes: ["mtsamis", "Abdulaziz"],
            text: "deploy to production once every two weeks",
          },
          optionTwo: {
            votes: ["tylermcginnis"],
            text: "deploy to production once every month",
          },
        },
      },

      authedUser: "Abdulaziz",
    };
    const mockStore = configureStore([thunk]);
    const store = mockStore(initState);
    const view = render(
      <BrowserRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </BrowserRouter>
    );
    expect(view).toMatchSnapshot();
  });
});

describe("Testing Login Page", () => {
  it("Test6: verify that a user name field, password field, and submit button are present on the page", () => {
    const initState = {
      users: {
        sarahedo: {
          id: "sarahedo",
          password: "password123",
          name: "Sarah Edo",
          avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
          answers: {
            "8xf0y6ziyjabvozdd253nd": "optionOne",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            am8ehyc8byjqgar0jgpub9: "optionTwo",
            loxhs1bqm25b708cmbf3g: "optionTwo",
          },
          questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
        },
        tylermcginnis: {
          id: "tylermcginnis",
          password: "abc321",
          name: "Tyler McGinnis",
          avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
          answers: {
            vthrdm985a262al8qx3do: "optionOne",
            xj352vofupe1dqz9emx13r: "optionTwo",
          },
          questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
        },
        mtsamis: {
          id: "mtsamis",
          password: "xyz123",
          name: "Mike Tsamis",
          avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
          answers: {
            xj352vofupe1dqz9emx13r: "optionOne",
            vthrdm985a262al8qx3do: "optionTwo",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
          },
          questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
        },
        Abdulaziz: {
          id: "Abdulaziz",
          password: "1234",
          name: "Abdulaziz Alsafadi",
          avatarURL: image,
          answers: {
            xj352vofupe1dqz9emx13r: "optionOne",
          },
          questions: [],
        },
      },

      questions: {
        "8xf0y6ziyjabvozdd253nd": {
          id: "8xf0y6ziyjabvozdd253nd",
          author: "sarahedo",
          timestamp: 1467166872634,
          optionOne: {
            votes: ["sarahedo"],
            text: "Build our new application with Javascript",
          },
          optionTwo: {
            votes: [],
            text: "Build our new application with Typescript",
          },
        },
        "6ni6ok3ym7mf1p33lnez": {
          id: "6ni6ok3ym7mf1p33lnez",
          author: "mtsamis",
          timestamp: 1468479767190,
          optionOne: {
            votes: [],
            text: "hire more frontend developers",
          },
          optionTwo: {
            votes: ["mtsamis", "sarahedo"],
            text: "hire more backend developers",
          },
        },
        am8ehyc8byjqgar0jgpub9: {
          id: "am8ehyc8byjqgar0jgpub9",
          author: "sarahedo",
          timestamp: 1488579767190,
          optionOne: {
            votes: [],
            text: "conduct a release retrospective 1 week after a release",
          },
          optionTwo: {
            votes: ["sarahedo"],
            text: "conduct release retrospectives quarterly",
          },
        },
        loxhs1bqm25b708cmbf3g: {
          id: "loxhs1bqm25b708cmbf3g",
          author: "tylermcginnis",
          timestamp: 1482579767190,
          optionOne: {
            votes: [],
            text: "have code reviews conducted by peers",
          },
          optionTwo: {
            votes: ["sarahedo"],
            text: "have code reviews conducted by managers",
          },
        },
        vthrdm985a262al8qx3do: {
          id: "vthrdm985a262al8qx3do",
          author: "tylermcginnis",
          timestamp: 1489579767190,
          optionOne: {
            votes: ["tylermcginnis"],
            text: "take a course on ReactJS",
          },
          optionTwo: {
            votes: ["mtsamis"],
            text: "take a course on unit testing with Jest",
          },
        },
        xj352vofupe1dqz9emx13r: {
          id: "xj352vofupe1dqz9emx13r",
          author: "mtsamis",
          timestamp: 1493579767190,
          optionOne: {
            votes: ["mtsamis", "Abdulaziz"],
            text: "deploy to production once every two weeks",
          },
          optionTwo: {
            votes: ["tylermcginnis"],
            text: "deploy to production once every month",
          },
        },
      },

      authedUser: "Abdulaziz",
    };
    const mockStore = configureStore([thunk]);
    const store = mockStore(initState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    const username = screen.getByTestId("username");

    const password = screen.getByTestId("password");

    const submit = screen.getByTestId("submit-button");

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  it("Test7: testing if Dashboard is rendered after correct data are being passed", () => {
    const initState = {
      users: {
        sarahedo: {
          id: "sarahedo",
          password: "password123",
          name: "Sarah Edo",
          avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
          answers: {
            "8xf0y6ziyjabvozdd253nd": "optionOne",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            am8ehyc8byjqgar0jgpub9: "optionTwo",
            loxhs1bqm25b708cmbf3g: "optionTwo",
          },
          questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
        },
        tylermcginnis: {
          id: "tylermcginnis",
          password: "abc321",
          name: "Tyler McGinnis",
          avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
          answers: {
            vthrdm985a262al8qx3do: "optionOne",
            xj352vofupe1dqz9emx13r: "optionTwo",
          },
          questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
        },
        mtsamis: {
          id: "mtsamis",
          password: "xyz123",
          name: "Mike Tsamis",
          avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
          answers: {
            xj352vofupe1dqz9emx13r: "optionOne",
            vthrdm985a262al8qx3do: "optionTwo",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
          },
          questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
        },
        Abdulaziz: {
          id: "Abdulaziz",
          password: "1234",
          name: "Abdulaziz Alsafadi",
          avatarURL: image,
          answers: {
            xj352vofupe1dqz9emx13r: "optionOne",
          },
          questions: [],
        },
      },

      questions: {
        "8xf0y6ziyjabvozdd253nd": {
          id: "8xf0y6ziyjabvozdd253nd",
          author: "sarahedo",
          timestamp: 1467166872634,
          optionOne: {
            votes: ["sarahedo"],
            text: "Build our new application with Javascript",
          },
          optionTwo: {
            votes: [],
            text: "Build our new application with Typescript",
          },
        },
        "6ni6ok3ym7mf1p33lnez": {
          id: "6ni6ok3ym7mf1p33lnez",
          author: "mtsamis",
          timestamp: 1468479767190,
          optionOne: {
            votes: [],
            text: "hire more frontend developers",
          },
          optionTwo: {
            votes: ["mtsamis", "sarahedo"],
            text: "hire more backend developers",
          },
        },
        am8ehyc8byjqgar0jgpub9: {
          id: "am8ehyc8byjqgar0jgpub9",
          author: "sarahedo",
          timestamp: 1488579767190,
          optionOne: {
            votes: [],
            text: "conduct a release retrospective 1 week after a release",
          },
          optionTwo: {
            votes: ["sarahedo"],
            text: "conduct release retrospectives quarterly",
          },
        },
        loxhs1bqm25b708cmbf3g: {
          id: "loxhs1bqm25b708cmbf3g",
          author: "tylermcginnis",
          timestamp: 1482579767190,
          optionOne: {
            votes: [],
            text: "have code reviews conducted by peers",
          },
          optionTwo: {
            votes: ["sarahedo"],
            text: "have code reviews conducted by managers",
          },
        },
        vthrdm985a262al8qx3do: {
          id: "vthrdm985a262al8qx3do",
          author: "tylermcginnis",
          timestamp: 1489579767190,
          optionOne: {
            votes: ["tylermcginnis"],
            text: "take a course on ReactJS",
          },
          optionTwo: {
            votes: ["mtsamis"],
            text: "take a course on unit testing with Jest",
          },
        },
        xj352vofupe1dqz9emx13r: {
          id: "xj352vofupe1dqz9emx13r",
          author: "mtsamis",
          timestamp: 1493579767190,
          optionOne: {
            votes: ["mtsamis", "Abdulaziz"],
            text: "deploy to production once every two weeks",
          },
          optionTwo: {
            votes: ["tylermcginnis"],
            text: "deploy to production once every month",
          },
        },
      },

      authedUser: "Abdulaziz",
    };
    const mockStore = configureStore([thunk]);
    const store = mockStore(initState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    const username = screen.getByTestId("username");
    fireEvent.change(username, { target: { value: "Abdulaziz" } });

    const password = screen.getByTestId("password");
    fireEvent.change(password, { target: { value: 1234 } });

    const submit = screen.getByTestId("submit-button");
    fireEvent.click(submit);

    // Testing if we are able to render Dashboard
    const view = render(
      <BrowserRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </BrowserRouter>
    );
    expect(view).toMatchSnapshot();
  });

  it("Test8: testing if error message appears when wrong data entered", () => {
    const initState = {
      users: {
        sarahedo: {
          id: "sarahedo",
          password: "password123",
          name: "Sarah Edo",
          avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
          answers: {
            "8xf0y6ziyjabvozdd253nd": "optionOne",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            am8ehyc8byjqgar0jgpub9: "optionTwo",
            loxhs1bqm25b708cmbf3g: "optionTwo",
          },
          questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
        },
        tylermcginnis: {
          id: "tylermcginnis",
          password: "abc321",
          name: "Tyler McGinnis",
          avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
          answers: {
            vthrdm985a262al8qx3do: "optionOne",
            xj352vofupe1dqz9emx13r: "optionTwo",
          },
          questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
        },
        mtsamis: {
          id: "mtsamis",
          password: "xyz123",
          name: "Mike Tsamis",
          avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
          answers: {
            xj352vofupe1dqz9emx13r: "optionOne",
            vthrdm985a262al8qx3do: "optionTwo",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
          },
          questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
        },
        Abdulaziz: {
          id: "Abdulaziz",
          password: "1234",
          name: "Abdulaziz Alsafadi",
          avatarURL: image,
          answers: {
            xj352vofupe1dqz9emx13r: "optionOne",
          },
          questions: [],
        },
      },

      questions: {
        "8xf0y6ziyjabvozdd253nd": {
          id: "8xf0y6ziyjabvozdd253nd",
          author: "sarahedo",
          timestamp: 1467166872634,
          optionOne: {
            votes: ["sarahedo"],
            text: "Build our new application with Javascript",
          },
          optionTwo: {
            votes: [],
            text: "Build our new application with Typescript",
          },
        },
        "6ni6ok3ym7mf1p33lnez": {
          id: "6ni6ok3ym7mf1p33lnez",
          author: "mtsamis",
          timestamp: 1468479767190,
          optionOne: {
            votes: [],
            text: "hire more frontend developers",
          },
          optionTwo: {
            votes: ["mtsamis", "sarahedo"],
            text: "hire more backend developers",
          },
        },
        am8ehyc8byjqgar0jgpub9: {
          id: "am8ehyc8byjqgar0jgpub9",
          author: "sarahedo",
          timestamp: 1488579767190,
          optionOne: {
            votes: [],
            text: "conduct a release retrospective 1 week after a release",
          },
          optionTwo: {
            votes: ["sarahedo"],
            text: "conduct release retrospectives quarterly",
          },
        },
        loxhs1bqm25b708cmbf3g: {
          id: "loxhs1bqm25b708cmbf3g",
          author: "tylermcginnis",
          timestamp: 1482579767190,
          optionOne: {
            votes: [],
            text: "have code reviews conducted by peers",
          },
          optionTwo: {
            votes: ["sarahedo"],
            text: "have code reviews conducted by managers",
          },
        },
        vthrdm985a262al8qx3do: {
          id: "vthrdm985a262al8qx3do",
          author: "tylermcginnis",
          timestamp: 1489579767190,
          optionOne: {
            votes: ["tylermcginnis"],
            text: "take a course on ReactJS",
          },
          optionTwo: {
            votes: ["mtsamis"],
            text: "take a course on unit testing with Jest",
          },
        },
        xj352vofupe1dqz9emx13r: {
          id: "xj352vofupe1dqz9emx13r",
          author: "mtsamis",
          timestamp: 1493579767190,
          optionOne: {
            votes: ["mtsamis", "Abdulaziz"],
            text: "deploy to production once every two weeks",
          },
          optionTwo: {
            votes: ["tylermcginnis"],
            text: "deploy to production once every month",
          },
        },
      },

      authedUser: "Abdulaziz",
    };
    const mockStore = configureStore([thunk]);
    const store = mockStore(initState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    const username = screen.getByTestId("username");
    fireEvent.change(username, { target: { value: "Abdaziz" } });

    const password = screen.getByTestId("password");
    fireEvent.change(password, { target: { value: 3334 } });

    const submit = screen.getByTestId("submit-button");
    fireEvent.click(submit);

    const error = screen.getByTestId("error-message");
    expect(error).toBeInTheDocument();
  });
});

describe("Verify existence of demanded all links", () => {
  it("Test9: Verify that all Links that are demanded in the requirement exist in the Nav Component", () => {
    const initState = {
      users: {
        sarahedo: {
          id: "sarahedo",
          password: "password123",
          name: "Sarah Edo",
          avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
          answers: {
            "8xf0y6ziyjabvozdd253nd": "optionOne",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            am8ehyc8byjqgar0jgpub9: "optionTwo",
            loxhs1bqm25b708cmbf3g: "optionTwo",
          },
          questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
        },
        tylermcginnis: {
          id: "tylermcginnis",
          password: "abc321",
          name: "Tyler McGinnis",
          avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
          answers: {
            vthrdm985a262al8qx3do: "optionOne",
            xj352vofupe1dqz9emx13r: "optionTwo",
          },
          questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
        },
        mtsamis: {
          id: "mtsamis",
          password: "xyz123",
          name: "Mike Tsamis",
          avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
          answers: {
            xj352vofupe1dqz9emx13r: "optionOne",
            vthrdm985a262al8qx3do: "optionTwo",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
          },
          questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
        },
        Abdulaziz: {
          id: "Abdulaziz",
          password: "1234",
          name: "Abdulaziz Alsafadi",
          avatarURL: image,
          answers: {
            xj352vofupe1dqz9emx13r: "optionOne",
          },
          questions: [],
        },
      },

      questions: {
        "8xf0y6ziyjabvozdd253nd": {
          id: "8xf0y6ziyjabvozdd253nd",
          author: "sarahedo",
          timestamp: 1467166872634,
          optionOne: {
            votes: ["sarahedo"],
            text: "Build our new application with Javascript",
          },
          optionTwo: {
            votes: [],
            text: "Build our new application with Typescript",
          },
        },
        "6ni6ok3ym7mf1p33lnez": {
          id: "6ni6ok3ym7mf1p33lnez",
          author: "mtsamis",
          timestamp: 1468479767190,
          optionOne: {
            votes: [],
            text: "hire more frontend developers",
          },
          optionTwo: {
            votes: ["mtsamis", "sarahedo"],
            text: "hire more backend developers",
          },
        },
        am8ehyc8byjqgar0jgpub9: {
          id: "am8ehyc8byjqgar0jgpub9",
          author: "sarahedo",
          timestamp: 1488579767190,
          optionOne: {
            votes: [],
            text: "conduct a release retrospective 1 week after a release",
          },
          optionTwo: {
            votes: ["sarahedo"],
            text: "conduct release retrospectives quarterly",
          },
        },
        loxhs1bqm25b708cmbf3g: {
          id: "loxhs1bqm25b708cmbf3g",
          author: "tylermcginnis",
          timestamp: 1482579767190,
          optionOne: {
            votes: [],
            text: "have code reviews conducted by peers",
          },
          optionTwo: {
            votes: ["sarahedo"],
            text: "have code reviews conducted by managers",
          },
        },
        vthrdm985a262al8qx3do: {
          id: "vthrdm985a262al8qx3do",
          author: "tylermcginnis",
          timestamp: 1489579767190,
          optionOne: {
            votes: ["tylermcginnis"],
            text: "take a course on ReactJS",
          },
          optionTwo: {
            votes: ["mtsamis"],
            text: "take a course on unit testing with Jest",
          },
        },
        xj352vofupe1dqz9emx13r: {
          id: "xj352vofupe1dqz9emx13r",
          author: "mtsamis",
          timestamp: 1493579767190,
          optionOne: {
            votes: ["mtsamis", "Abdulaziz"],
            text: "deploy to production once every two weeks",
          },
          optionTwo: {
            votes: ["tylermcginnis"],
            text: "deploy to production once every month",
          },
        },
      },

      authedUser: "Abdulaziz",
    };
    const mockStore = configureStore([thunk]);
    const store = mockStore(initState);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Nav />
        </Provider>
      </BrowserRouter>
    );
    const home = screen.getByTestId("home");
    const leaderboard = screen.getByTestId("leaderboard");
    const add = screen.getByTestId("add");
    const logout = screen.getByTestId("logout");

    expect(home).toBeInTheDocument();
    expect(leaderboard).toBeInTheDocument();
    expect(add).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
  });
});

describe("Testing newPll Comp", () => {
  it("Test10: Verify that optionOne field, optionTwo field, and submit field are present in the page", () => {
    const initState = {
      users: {
        sarahedo: {
          id: "sarahedo",
          password: "password123",
          name: "Sarah Edo",
          avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
          answers: {
            "8xf0y6ziyjabvozdd253nd": "optionOne",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            am8ehyc8byjqgar0jgpub9: "optionTwo",
            loxhs1bqm25b708cmbf3g: "optionTwo",
          },
          questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
        },
        tylermcginnis: {
          id: "tylermcginnis",
          password: "abc321",
          name: "Tyler McGinnis",
          avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
          answers: {
            vthrdm985a262al8qx3do: "optionOne",
            xj352vofupe1dqz9emx13r: "optionTwo",
          },
          questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
        },
        mtsamis: {
          id: "mtsamis",
          password: "xyz123",
          name: "Mike Tsamis",
          avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
          answers: {
            xj352vofupe1dqz9emx13r: "optionOne",
            vthrdm985a262al8qx3do: "optionTwo",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
          },
          questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
        },
        Abdulaziz: {
          id: "Abdulaziz",
          password: "1234",
          name: "Abdulaziz Alsafadi",
          avatarURL: image,
          answers: {
            xj352vofupe1dqz9emx13r: "optionOne",
          },
          questions: [],
        },
      },

      questions: {
        "8xf0y6ziyjabvozdd253nd": {
          id: "8xf0y6ziyjabvozdd253nd",
          author: "sarahedo",
          timestamp: 1467166872634,
          optionOne: {
            votes: ["sarahedo"],
            text: "Build our new application with Javascript",
          },
          optionTwo: {
            votes: [],
            text: "Build our new application with Typescript",
          },
        },
        "6ni6ok3ym7mf1p33lnez": {
          id: "6ni6ok3ym7mf1p33lnez",
          author: "mtsamis",
          timestamp: 1468479767190,
          optionOne: {
            votes: [],
            text: "hire more frontend developers",
          },
          optionTwo: {
            votes: ["mtsamis", "sarahedo"],
            text: "hire more backend developers",
          },
        },
        am8ehyc8byjqgar0jgpub9: {
          id: "am8ehyc8byjqgar0jgpub9",
          author: "sarahedo",
          timestamp: 1488579767190,
          optionOne: {
            votes: [],
            text: "conduct a release retrospective 1 week after a release",
          },
          optionTwo: {
            votes: ["sarahedo"],
            text: "conduct release retrospectives quarterly",
          },
        },
        loxhs1bqm25b708cmbf3g: {
          id: "loxhs1bqm25b708cmbf3g",
          author: "tylermcginnis",
          timestamp: 1482579767190,
          optionOne: {
            votes: [],
            text: "have code reviews conducted by peers",
          },
          optionTwo: {
            votes: ["sarahedo"],
            text: "have code reviews conducted by managers",
          },
        },
        vthrdm985a262al8qx3do: {
          id: "vthrdm985a262al8qx3do",
          author: "tylermcginnis",
          timestamp: 1489579767190,
          optionOne: {
            votes: ["tylermcginnis"],
            text: "take a course on ReactJS",
          },
          optionTwo: {
            votes: ["mtsamis"],
            text: "take a course on unit testing with Jest",
          },
        },
        xj352vofupe1dqz9emx13r: {
          id: "xj352vofupe1dqz9emx13r",
          author: "mtsamis",
          timestamp: 1493579767190,
          optionOne: {
            votes: ["mtsamis", "Abdulaziz"],
            text: "deploy to production once every two weeks",
          },
          optionTwo: {
            votes: ["tylermcginnis"],
            text: "deploy to production once every month",
          },
        },
      },

      authedUser: "Abdulaziz",
    };
    const mockStore = configureStore([thunk]);
    const store = mockStore(initState);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <NewPoll />
        </Provider>
      </BrowserRouter>
    );

    const optionOne = screen.getByTestId("optionOne");

    const optionTwo = screen.getByTestId("optionTwo");

    const submit = screen.getByTestId("submit");

    expect(optionOne).toBeInTheDocument();
    expect(optionTwo).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });
});
