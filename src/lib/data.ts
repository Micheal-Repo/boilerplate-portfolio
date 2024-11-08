

export interface navLinksType {
  link: string;
  href: string;
  track: string 
}

export const navLinks: navLinksType[] = [
  {
    link: "Home",
    href: "#home",
    track: "home",
  },
  {
    link: "About",
    href: "#about",
    track: "about",
  },
  {
    link: "Services",
    href: "#service",
    track: "service",
  },
  {
    link: "Skills",
    href: "#skill",
    track: "skill",
  },
  {
    link: "Projects",
    href: "#project",
    track: "project",
  },
  {
    link: "Testimonial",
    href: "#testimonial",
    track: "testimonial",
  },
  {
    link: "Contact",
    href: "#contact",
    track: "contact",
  },
];





export interface serviceType{
  name:string,
  icon:string,
  desc:string
}
export const services:serviceType[] =[
   {
     name:"UI/UX Design",
     icon:"design",
     desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi! "
   },
   {
     name:"Web Development",
     icon:"code",
     desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi! "
   },
   {
     name:"Content Creation",
     icon:"content",
     desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi! "
   },
  ]
  
  
  
  
  
   
  export interface skillType{
    title:string,
    list:Array<{
      skill:string,
      expert:boolean
    }>
  }
  export const skills:skillType[] =[
      {
        title:"UI/UX",
        list:[
           {skill:"figma",expert:true},
           {skill:"sketch",expert:false},
           {skill:"XD",expert:false},
          ],
      },
      {
        title:"Frontend Development",
        list:[
           {skill:"HTML",expert:true},
           {skill:"CSS",expert:true},
           {skill:"JavaScript",expert:false},
           {skill:"Tailwind",expert:false},
           {skill:"Bostrap",expert:false},
           {skill:"React",expert:true},

          ],
      },
      {
        title:"Backend Development",
        list:[
           {skill:"Nodejs",expert:true},
           {skill:"Mongodb",expert:true},
           {skill:"PHP",expert:false},
           {skill:"Python",expert:false},
           {skill:"MySQL",expert:true},
          ],
      },
    
    ]
    
 
 
 
 
 export interface projectType{
   title: string,
   desc: string,
   img:string,
   category:string,
 }
 
 export const projects:projectType[]=[
    {
      title:"AI Powered School",
      desc:"Transforming education with AI, our School UI Design project revolutionizes the learning experience. Seamlessly integrating intelligent features, personalized interfaces, and intuitive navigation, our design empowers educators and students alike. Experience innovation at its finest as we pave the way for a smarter, more efficient educational journey.",
      img:"/Ai.png",
      category:"UI/UX"
    },
    {
      title:"Robotic Engineering Web Application",
      desc:"Unlock the future of robotics with our Robotic Engineering Web Application project. Seamlessly integrating cutting-edge technology, data analytics, and collaborative tools, our platform empowers engineers to design, simulate, and optimize robotic systems. Experience innovation at its peak as we redefine the boundaries of robotic engineering.",
      img:"/robotics.png",
      category:"Web"
    },
    {
      title:"Project Management application",
      desc:"Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient. Elevate your project management experience and achieve success with ease.",
      img:"/task.png",
      category:"Apps"
    },
    {
      title:"Mobile bank - App Design",
      desc:"Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience",
      img:"/mobileApp.png",
      category:"UI/UX"
    },
    {
      title:"Quiz App Development",
      desc:"Elevate engagement and knowledge retention with our Quiz App Development project. Seamlessly crafted for interactive learning experiences, our app offers customizable quizzes, real-time feedback, and captivating visuals. Empower users to test their knowledge anytime, anywhere, fostering a dynamic learning environment tailored to their needs.",
      img:"/task.png",
      category:"Apps"
    },
   
  ]
   


