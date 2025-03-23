"use client"
import { useRef, useState } from "react";
import { courier_prime } from "../font";

const skill_data = {
    "React": {
        "Where I Use This?": [
            "During my internship at KodeSkool, I used React to develop an interactive coding school platform for students.",
            "I leveraged React in the design and functionality of my personal portfolio website."
        ],
        "Experience": [
            "I have over a year of experience using React in real-world projects, particularly in building dynamic and responsive web applications.",
            "I started working with React in my first year of B.Tech, gaining hands-on experience and mastering its concepts."
        ],
        "Challenges": [
            "Successfully integrated React with backend services and APIs to fetch and display dynamic data.",
            "Handled complex state management in large applications, ensuring smooth user interactions.",
            "Implemented interactive data visualizations like Pie Charts and Bar Graphs using 'chart.js'."
        ],
        "What can I do?": [
            "I can develop fully functional, responsive web applications using React.",
            "I am skilled in optimizing React components for better performance and user experience."
        ],
        "Libraries": [
            "'chart.js' for creating interactive data visualizations.",
            "'codemirror' for integrating code editors into web applications.",
            "'fortawesome' for adding icons to the user interface.",
            "'bootstrap' for rapid and responsive design layouts."
        ]
    },

    "Next": {
        "Where I Use This?": [
            "This very portfolio you are viewing is built using Next.js, showcasing my skills and projects."
        ],
        "Experience": [
            "I have a solid two months of experience with Next.js, gaining expertise in its features and building dynamic applications.",
            "In my practice, I have focused on server-side rendering (SSR) and static site generation (SSG) to optimize performance."
        ],
        "Challenges": [
            "Designing dynamic, multi-page navigation systems while keeping the application structure modular and clean.",
            "Implemented a loader animation (used in the skills section) using CSS variables for a smooth user experience."
        ],
        "Achievements": [
            "Successfully designed and developed my portfolio website using Next.js.",
            "Completed challenging transitions and animations, which improved user interaction and flow."
        ],
        "What can I do?": [
            "I can build full-fledged websites with both frontend and backend functionalities using Next.js.",
            "I can leverage Next.js features like SSR, SSG, and API routes to create scalable web applications."
        ],
        "Libraries": [
            "'fortawesome' for adding scalable icons to the user interface."
        ]
    },

    "Node": {
        "Where I Use This?": [
            "In my internship at KodeSkool, I used Node.js to develop RESTful APIs for the coding school platform.",
            "I also utilized Node.js in my E-commerce website to handle server-side operations."
        ],
        "Experience": [
            "I have over a year of experience working with Node.js in multiple projects.",
            "I started learning Node.js during my first year of B.Tech and have been actively using it since then."
        ],
        "Challenges": [
            "Implemented middleware to verify and fetch user details using 'jsonwebtoken' or user credentials.",
            "Designed a custom error-handling mechanism to ensure smooth API functionality.",
            "Optimized database queries for faster server response times in high-traffic applications."
        ],
        "What can I do?": [
            "I can create robust and scalable server-side applications.",
            "I can develop and deploy secure RESTful APIs for efficient data exchange."
        ],
        "Libraries": [
            "'express' used for routing and middleware.",
            "'mongoose' for database operations with MongoDB.",
            "'bcrypt' for implementing secure password hashing.",
            "'jsonwebtoken' for handling authentication tokens."
        ]
    },

    "Express": {
        "Where I Use This?": [
            "Used Express in my internship at KodeSkool for building scalable RESTful APIs.",
            "Integrated Express with MongoDB to manage backend services for my E-commerce project."
        ],
        "Experience": [
            "Over a year of hands-on experience working with Express in real-world projects.",
            "Developed middleware and routing mechanisms for server-side applications."
        ],
        "Challenges": [
            "Created dynamic routing for handling multiple user roles and permissions.",
            "Implemented rate limiting to protect APIs from excessive requests.",
            "Debugged CORS issues while connecting the frontend to backend APIs."
        ],
        "What can I do?": [
            "I can build and manage server-side applications with efficient routing and middleware.",
            "I can implement secure API services integrated with databases like MongoDB and MySQL."
        ],
        "Libraries": [
            "'body-parser' for parsing incoming request bodies.",
            "'cors' to enable cross-origin resource sharing.",
            "'morgan' for HTTP request logging.",
            "'express-validator' for data validation in requests."
        ]
    },

    "MongoDB": {
        "Where I Use This?": [
            "Integrated MongoDB to manage data storage for my E-commerce website.",
            "Utilized MongoDB in my internship at KodeSkool to create a scalable database structure."
        ],
        "Experience": [
            "Hands-on experience of over a year in database modeling and CRUD operations.",
            "Learned advanced MongoDB querying while working on real-world projects."
        ],
        "Challenges": [
            "Designed schema for efficient data relationships and indexing.",
            "Optimized aggregation pipelines for complex data retrieval.",
            "Handled database migrations without affecting live application performance."
        ],
        "What can I do?": [
            "I can design and implement efficient database schemas.",
            "I can perform advanced queries and optimize database performance."
        ],
        "Libraries": [
            "'mongoose' for object data modeling and query building.",
            "'mongodb' native driver for direct database interactions."
        ]
    },

    "JS": {
        "Where I Use This?": [
            "Used extensively in developing interactive UI components for my portfolio website.",
            "Implemented various features in my E-commerce platform."
        ],
        "Experience": [
            "Proficient in JavaScript with over two years of dedicated practice and real-world implementation.",
            "Developed numerous projects from scratch, leveraging advanced JavaScript concepts."
        ],
        "Challenges": [
            "Designed a featured search algorithm for my E-commerce platform.",
            "Developed a form for sellers to add products with live image rendering.",
            "Debugged asynchronous code to handle API calls efficiently."
        ],
        "What can I do?": [
            "I can develop dynamic web applications with responsive and interactive interfaces.",
            "I can optimize JavaScript code for better performance and maintainability."
        ],
        "Libraries": [
            "'chart.js' for creating interactive data visualizations.",
            "'axios' for handling API requests."
        ]
    },

    "Tailwind": {
        "Where I Use This?": [
            "Designed modern, responsive UI layouts for my E-commerce platform using Tailwind CSS.",
            "Implemented Tailwind for rapid prototyping and styling in my portfolio project."
        ],
        "Experience": [
            "Over six months of experience leveraging Tailwind CSS for creating highly customizable UI designs.",
            "Integrated Tailwind with React and Next.js to streamline the design workflow."
        ],
        "Challenges": [
            "Customized utility classes to meet specific design requirements.",
            "Managed complex component styling for a consistent user experience across devices.",
            "Optimized Tailwind configuration for better maintainability and reusability."
        ],
        "What can I do?": [
            "I can create pixel-perfect, responsive web designs using Tailwind CSS.",
            "I can efficiently integrate Tailwind with modern JavaScript frameworks."
        ],
        "Libraries": [
            "Tailwind CSS framework for utility-first design.",
            "@tailwind/forms for styling form elements.",
            "@headlessui/react for accessible UI components."
        ]
    },

    "Python": {
        "Where I Use This?": [
            "I have used Python for automation tasks in my projects."
        ],
        "Experience": [
            "I have practiced Python for a few months, focusing on its syntax and applications."
        ],
        "Challenges": [
            "Learning the syntax and libraries efficiently to meet project requirements.",
            "Integrating Python with databases to manage and manipulate data effectively."
        ],
        "What can I do?": [
            "I can create simple applications using Python for automation.",
            "I can connect Python applications to databases like MySQL to perform data operations."
        ],
        "Additional Info": [
            "I am familiar with Python's versatility in areas such as web development, automation, and data analysis.",
            "I have a basic understanding of using Python to build and deploy RESTful APIs with Flask."
        ]
    },

    "MySQL": {
        "Where I Use This?": [
            "I have worked with MySQL to store and retrieve data.",
            "I have connected MySQL with Python to handle database operations."
        ],
        "Experience": [
            "Although I have practiced MySQL for a short time, I have gained hands-on experience in executing queries and database management.",
            "I have learned to structure databases and perform CRUD operations."
        ],
        "Challenges": [
            "Designing an optimized schema for relational data storage.",
            "Handling large datasets and optimizing query performance."
        ],
        "What can I do?": [
            "I can perform basic database operations, including CRUD operations.",
            "I can design a relational database structure for a small to medium-sized application."
        ],
        "Libraries": [
            "'mysql2' for interacting with MySQL databases in Node.js.",
            "'pymysql' for connecting MySQL with Python applications."
        ]
    },

    "Git": {
        "Where I Use This?": [
            "I use Git to manage and version control my projects.",
            "I have used Git for creating repositories and pushing/pulling code to/from GitHub."
        ],
        "Experience": [
            "I have been using Git consistently to maintain project versions and collaborate with others.",
            "Experienced in managing branches, resolving merge conflicts, and creating pull requests."
        ],
        "Challenges": [
            "Resolving merge conflicts when working in teams on the same project.",
            "Ensuring proper commit messages for clear version tracking."
        ],
        "What can I do?": [
            "I can manage code versioning efficiently using Git.",
            "I can collaborate with teams using branching and pull requests in GitHub."
        ],
        "Additional Info": [
            "I am familiar with Git workflows, including Git Flow and GitHub workflows.",
            "Comfortable working in both local and remote repositories, handling branches and merges."
        ]
    }

}

const skill_list = [
    'React',
    'Next',
    'Node',
    'Express',
    'MongoDB',
    'JS',
    'Tailwind',
    'Python',
    'MySQL',
    'Git'
]

function SkillCard({ progress, title, onclick, hover = true, loc = null, tooltipPosition = 'top' }) {
    return (
        <div className={"flex justify-center items-center aspect-square p-7 relative group " + (hover ? " rounded-md hover:bg-slate-400 hover:bg-opacity-50 " : " bg-gray-900 bg-opacity-95")} style={loc && { gridColumn: `${loc.col} / span 1`, gridRow: `${loc.row} / span 1`, }} onClick={onclick}>
            {hover && tooltipPosition !== 'none' && (
                <div className={`absolute ${tooltipPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'} left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap z-20 border border-purple-500 shadow-md`}>
                    Click to view more details
                </div>
            )}
            <div className="relative rounded-full w-3/4 aspect-square p-[6%] shadow-xl">
                <div className="rounded-full w-full aspect-square shadow-inner flex justify-center items-center">
                    <p className={"text-xl font-bold text-center " + courier_prime.className}>{title}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 100 100" className="absolute top-0 left-0">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#DA22FF" />
                            <stop offset="100%" stopColor="#9733EE" />
                        </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="46" strokeLinecap="round" fill="none" strokeWidth="8" stroke="url(#GradientColor)" strokeDasharray={2 * Math.PI * 46} strokeDashoffset={2 * Math.PI * 46} style={{ "--end-offset": 2 * Math.PI * 46 * (1 - progress / 100) }} className={hover ? "animate-[ProgressBar_1s_linear_forwards]" : "animate-[ProgressBar_1s_linear_0.5s_forwards]"} />
                </svg>
            </div>
        </div>
    )
}

export default function Skills(props) {
    const skillDetail = useRef(null);
    const [skillItems, setSkillItems] = useState([])

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const openSkillDetail = async (grid_loc, x_origin, y_origin, progress, title) => {
        const skillBox = skillDetail.current;
        skillBox.style.transformOrigin = `${x_origin}% ${y_origin}%`;
        await sleep(500);
        let data = skill_data[title];

        setSkillItems((prevItems) => [
            ...prevItems,
            { card: true, grid_loc, progress, title },
            { "Where I Use This?": data["Where I Use This?"] },
            { "Experience": data["Experience"] },
            { "Challenges": data["Challenges"] },
            { "What can I do?": data["What can I do?"] },
            data["Libraries"] ? { "Libraries": data["Libraries"] } : null,
            data["Additional Info"] ? { "Additional Info": data["Additional Info"] } : null
        ]);

        skillBox.classList.remove('scale-0')
        skillBox.classList.add('scale-1')

        const handleMouseOut = async () => {
            skillBox.classList.remove('scale-1')
            skillBox.classList.add('scale-0')
            skillBox.removeEventListener('mouseout', handleMouseOut);
            await sleep(500);
            setSkillItems([])
        }
        skillBox.addEventListener('mouseout', handleMouseOut)
    }

    return (
        <section className={"mt-28 mx-auto " + props.size}>
            <div className="font-mono text-lg">.../My Skills...</div>
            <div className="grid grid-cols-5 w-full mt-2 relative">
                <SkillCard progress={80} title={'React'} onclick={() => openSkillDetail(1, 0, 0, 80, 'React')} tooltipPosition="top" />
                <SkillCard progress={75} title={'Next'} onclick={() => openSkillDetail(2, 30, 0, 75, 'Next')} tooltipPosition="top" />
                <SkillCard progress={85} title={'Node'} onclick={() => openSkillDetail(3, 50, 0, 85, 'Node')} tooltipPosition="top" />
                <SkillCard progress={65} title={'Express'} onclick={() => openSkillDetail(4, 70, 0, 65, 'Express')} tooltipPosition="top" />
                <SkillCard progress={70} title={'MongoDB'} onclick={() => openSkillDetail(5, 100, 0, 70, 'MongoDB')} tooltipPosition="top" />
                <SkillCard progress={90} title={'JS'} onclick={() => openSkillDetail(6, 0, 100, 90, 'JS')} tooltipPosition="bottom" />
                <SkillCard progress={80} title={'Tailwind'} onclick={() => openSkillDetail(7, 30, 100, 80, 'Tailwind')} tooltipPosition="bottom" />
                <SkillCard progress={45} title={'Python'} onclick={() => openSkillDetail(8, 50, 100, 45, 'Python')} tooltipPosition="bottom" />
                <SkillCard progress={35} title={'MySQL'} onclick={() => openSkillDetail(9, 70, 100, 35, 'MySQL')} tooltipPosition="bottom" />
                <SkillCard progress={65} title={'Git'} onclick={() => openSkillDetail(10, 100, 100, 65, 'Git')} tooltipPosition="bottom" />
                <div ref={skillDetail} className="grid grid-cols-5 grid-rows-2 absolute w-full h-full top-0 left-0 z-10 transition-all duration-1000 scale-0">
                    {(() => {
                        const neighbors = new Set();
                        const GRID_COLS = 5; // Number of columns in the grid
                        const GRID_ROWS = 2; // Number of rows in the grid

                        const getNeighbors = (row, col) => {
                            let neighborCells = [];
                            const dirMidCells = [
                                [-1, 0], // Up
                                [1, 0], // Down
                                [0, -1], // Left
                                [0, 1], // Right
                                [-1, -1], // Top-left diagonal
                                [-1, 1], // Top-right diagonal
                                [1, -1], // Bottom-left diagonal
                                [1, 1], // Bottom-right diagonal
                                // Only five directions will be valid here.
                            ];
                            const dirCornerCells = [
                                [0, -2], // Double Left
                                [0, 2], // Double Right
                                [-1, -2], // Top-double-left diagonal
                                [-1, 2], // Top-double-right diagonal
                                [1, -2], // Bottom-double-left diagonal
                                [1, 2], // Bottom-double-right diagonal 
                                // Only two cells will be valid here for corners.
                            ]

                            for (const [dRow, dCol] of dirMidCells) {
                                const nRow = row + dRow;
                                const nCol = col + dCol;
                                if (nRow > 0 && nRow <= GRID_ROWS && nCol > 0 && nCol <= GRID_COLS) {
                                    neighborCells.push(`${nRow}-${nCol}`);
                                }
                            }

                            if (col === 1 || col === 5) {
                                for (const [dRow, dCol] of dirCornerCells) {
                                    const nRow = row + dRow;
                                    const nCol = col + dCol;
                                    if (nRow > 0 && nRow <= GRID_ROWS && nCol > 0 && nCol <= GRID_COLS) {
                                        neighborCells.push(`${nRow}-${nCol}`);
                                    }
                                }
                            }

                            return neighborCells;
                        }

                        const skillCard = skillItems.filter(item => item && item.card).map((item, index) => {
                            const col = item.grid_loc <= GRID_COLS ? item.grid_loc : item.grid_loc - GRID_COLS;
                            const row = item.grid_loc <= GRID_COLS ? 1 : 2;
                            const neighborCells = getNeighbors(row, col);
                            neighborCells.forEach((neighbor) => neighbors.add(neighbor));

                            return <SkillCard key={index - 1} progress={item.progress} title={item.title} onclick={() => { }} hover={false} loc={{ row, col }} tooltipPosition="none" />
                        })

                        const otherCells = skillItems.filter(item => item && !item.card).map((item, index) => {
                            let Cell = Array.from(neighbors)[index]; // Place in already calculated neighbor cells
                            const [row, col] = Cell.split("-").map(Number);

                            return (
                                <div key={index} className="flex flex-col gap-1 bg-gray-900 px-3 py-2" style={{ gridColumn: `${col} / span 1`, gridRow: `${row} / span 1` }}>
                                    <h3 className="text-base font-semibold text-green-400">{Object.keys(item)[0]}</h3>
                                    <ul className="flex flex-col gap-2 list-disc list-inside">
                                        {Object.values(item)[0].map((value, i) => {
                                            return <li key={i} className="text-xs font-medium text-amber-400">{value}</li>
                                        })}
                                    </ul>
                                </div>
                            )
                        })

                        return [...skillCard, ...otherCells];
                    })()}
                </div>
            </div>
        </section >
    )
}
