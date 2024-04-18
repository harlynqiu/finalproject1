const thedata = {
    homeData: {
        mainImage: "https://assets-v2.lottiefiles.com/a/4fb1c6b4-52fa-11ee-9adf-9f3bf901f1f2/sn8sc9KFix.gif",
        // movingImage: "https://media.tenor.com/TT1hCsF1vUwAAAAi/banana-cat-running.gif",
        pageTitle: "Welcome To My Page!",
        ctaLinks: [
            { href: "./views/about", text: "About Me" },
            { href: "./views/portfolio", text: "My Portfolio" },
            { href: "./views/travel", text: "Travels" },
            { href: "./views/leo", text: "Leo" },
            { href: "./views/main", text: "Home" },
            { href: "./views/uniquePage", text: "Game" },
        ],
    },

    aboutData: {
        profilePictureUrl: "https://i.pinimg.com/736x/cb/cb/aa/cbcbaa4de780a4a66fe06c83e325197f.jpg",
        
        socials: [
            {
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png",
              url: "https://www.facebook.com/kjlaranio/",
            },
            {
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png",
              url: "https://www.instagram.com/kharhyll/",
            },
            {
              img: "https://upload.wikimedia.org/wikipedia/commons/e/e6/729101_linkedin_icon.png",
              url: "https://www.linkedin.com/in/kharhyll-joy-laranio-a43812258/",
            },
          ],
    },

    portfolioData: {
        project: [
            {
                title: "Simple Blog App",
                description: "With CRUD functionality, this app utilizes NextJS for frontend and backend, Prisma ORM for database management, and Sqlite3 for database storage",
                thumbnail: "https://cdn.dribbble.com/users/2212936/screenshots/6170689/media/cfefe47622654dad65b8745c5d639aec.png?resize=400x0",
                siteURL: "https://github.com/iamelkar/my-blog-final.git"
            }
        ],
        education: [
            {
                school: "Ateneo de Davao University",
                degree: "Bachelor of Science in Information Technology",
                batch: "2020-2025"
            },
            {
                school: "Holy Cross of Davao College",
                degree: "Senior High School - Humanities and Social Sciences",
                batch: "Batch 2020-2021"
            },
            {
                degree: "Computer System Servicing Major",
                school: "Baguio National School of Arts and Trades",
                batch: "2018-2020"
            }
        ],
        workExp: [
            {
                currWorkName: "Non-voice Customer Support",
                currCompName: "JNTrading Corp",
                duration: "March 2023 - Present"
            },

            {
                pastWorkName: "Virtual Assistant",
                pastCompName: "IOTAFIX",
                durationPast: "February 2022 - April 2022"
            }
        ]
    },

    uniquePagedata: {
        games: [
            {
                title: "Tetris",
                gifUrl: "https://media.tenor.com/CgGkfqgFpzIAAAAM/tetris-t-spin.gif"
            },
            {
                title: "Tic Tac Toe",
                gifUrl: "https://media.tenor.com/rH3Yh7-6UhsAAAAM/cereal-tic-tac-toe.gif"
            }
            // Add more games as needed
        ],
    },
};

module.exports = thedata;