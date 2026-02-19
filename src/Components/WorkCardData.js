import news from "../assets/news.png"
import quiz from "../assets/quiz.png"
import signup from "../assets/signup.png"
import tictac from "../assets/tictac.png"
import movie from "../assets/movie.png"


const ProjectCardData = [
    {
        imgsrc: news,
        title: "News App",
        text: "A modern news application that delivers real-time headlines by integrating with an external news API source. The app dynamically fetches and renders up-to-date articles across multiple categories, ensuring users receive current information instantly.",
        view: "",
        source: "https://github.com/reginald-moyo/react-news-app"
    },
    {
        imgsrc: quiz,
        title: "Quiz App",
        text: "An interactive Quiz App that lets users answer multiple-choice questions, receive instant feedback and and view their final score at the end of the quiz. Built with a focus on clean UI, responsive design, and user-friendly interactions ",
        view: "",
        source: "https://github.com/reginald-moyo/react-quiz-app"
    },
    {
        imgsrc: signup,
        title: "SignUp-LogIn Form",
        text: "Register to create your account and access all features of the application. If you already have an account, simply log in to continue.",
        view: "",
        source: "https://github.com/reginald-moyo/react-signup-form"
    },  
    {
        imgsrc: tictac,
        title: "Tic-Tac-Toe Game",
        text: "A classic Tic Tac Toe game built with a focus on clean UI, game logic, and user interaction. Features turn-based gameplay, win detection, and game reset functionality.",
        view: "",
        source: "https://github.com/reginald-moyo/react-tic-tac-toe-game.git"
    },
    {
        imgsrc: movie,
        title: "Movie App",
        text: "A React + Vite web application that fetches real-time movie data from an external API, implements dynamic search functionality, and integrates backend database logic for managing persistent data. Demonstrates API consumption, asynchronous state handling, and full-stack integration fundamentals.",
        view: "",
        source: "https://github.com/reginald-moyo/movie-app.git"
    }          
];

export default ProjectCardData;