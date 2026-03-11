import news from "../assets/news.png"
import quiz from "../assets/quiz.png"
import signup from "../assets/signup.png"
import tictac from "../assets/tictac.png"
import movie from "../assets/movie.png"
import latest from "../assets/latest.png"
import technology from "../assets/technology.png"
import health from "../assets/health.png"
import sports from "../assets/sports.png"
import tech from "../assets/tech.png"



const ProjectCardData = [
    {
        imgsrc: signup,
        title: "SignUp-LogIn Form",
        text: "Register to create your account and access all features of the application. If you already have an account, simply log in to continue.",
        view: "https://react-signup-form-eight.vercel.app/",
        source: "https://github.com/reginald-moyo/react-signup-form",
        id: 1,
        description: "",
        screenshots: ""
    },
    {
        imgsrc: tictac,
        title: "Tic-Tac-Toe Game",
        text: "A classic Tic Tac Toe game built with a focus on clean UI, game logic, and user interaction. Features turn-based gameplay, win detection, and game reset functionality.",
        view: "https://react-tic-tac-toe-game-tan.vercel.app/",
        source: "https://github.com/reginald-moyo/react-tic-tac-toe-game.git",
        id: 2,
        description: "",
        screenshots: ""
    }, 
    {
        imgsrc: quiz,
        title: "Quiz App",
        text: "An interactive Quiz App that lets users answer multiple-choice questions, receive instant feedback and and view their final score at the end of the quiz. Built with a focus on clean UI, responsive design, and user-friendly interactions ",
        view: "https://react-quiz-app-inky-nine.vercel.app/",
        source: "https://github.com/reginald-moyo/react-quiz-app",
        id: 3,
        description: "",
        screenshots: ""
    },
    {
        imgsrc: news,
        title: "News App",
        text: "A modern news application that delivers real-time headlines by integrating with an external news API source. The app dynamically fetches and renders up-to-date articles across multiple categories, ensuring users receive current information instantly.",
        view: "",
        source: "https://github.com/reginald-moyo/react-news-app",
        id: 4,
        description: "The News App is a responsive web application that allows users to browse the latest news from different categories through a clean and intuitive interface. It retrieves real-time articles from a news API and dynamically displays headlines, images, and descriptions. During development, I faced challenges handling incomplete API data (such as missing images) and ensuring the layout remained responsive across different screen sizes. I implemented fallback solutions and refined the layout to maintain consistency. In the future, I plan to add search functionality, article bookmarking, and improved performance optimization.",
        screenshots: [
            technology, 
            health,
            sports,
            tech, 
            latest, 
        ]
        
    },
    {
        imgsrc: movie,
        title: "Movie App",
        text: "A React + Vite web application that fetches real-time movie data from an external API, implements dynamic search functionality, and integrates backend database logic for managing persistent data. Demonstrates API consumption, asynchronous state handling, and full-stack integration fundamentals.",
        view: "https://movie-app-rho-dusky.vercel.app/",
        source: "https://github.com/reginald-moyo/movie-app.git",
        id: 5,
        description: "",
        screenshots: ""
    }          
];

export default ProjectCardData;