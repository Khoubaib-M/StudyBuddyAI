function About() {
  return (
    <div className="text-2xl p-4 mx-auto  max-w-2xl ">
      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">
        About Us
      </h1>

      <div className="mt-2 text-sm font-sans text-left bg-blue-200 rounded-lg">
        <div className="border-t-2 border-gray-200 p-2 mb-2">
          <h2 className="text-2xl mt-1 mb-1 p-2 font-medium">Study Buddy</h2>
          <p>Study Buddy is an AI study-helper or assistant. Study buddy can be used by anyone looking to learn anything. As a student or learner, you can use Study Buddy to create a personalized study assistant whom you can ask questions and get help with your studies. When you visit get to the homepage of Study Buddy, you can ask Study Buddy questions related to any subject or topic and receive helpful answers. You can also use the search to look up information and get step-by-step instructions for solving problems. Study Buddy can aslso be used to save reminders on your calender for assignments, project due dates and anything you want to be reminded of. With Study Buddy, you have a personalized study companion that helps you study, stay on track and achieve your academic goals.</p>
        </div>

        <div className="border-t-2 border-gray-200 p-2 mb-2">
          <h2 className="text-2xl mt-1 mb-1 p-2 font-medium">Future Developments</h2>
          <p>This current build is the base MVP which will be modified with more features added in the future. The developers of this app will in the future seek to implement the following: <br></br>
            - A login feature for users to log in for a personalized experience <br></br>
            - Feature that will allow users create a study room and invite other users to the room <br></br>
            - Feature that will allow users save learning timeline on a calendar and track their progress.</p>
        </div>

        <div className="border-t-2 border-gray-250 p-2 mb-2">
          <h2 className="text-2xl mt-1 mb-1 p-2 font-medium">Contributions & Enquiries</h2>
          <p>For contributions and enquiries, please contact any of the developers of ths app: <br></br>
          <a className='font-medium text-red-700' href='https://github.com/innonka'>Rothmann Inna</a> <br></br>

          <a className='font-medium text-red-700' href='https://github.com/khoubaib-m'>Khoubaib Majouli</a><br></br>

          <a className='font-medium text-red-700' href='https://github.com/able24'>Abel Egbele</a><br></br>

          <a className='font-medium text-red-700' href='https://github.com/kemocares'>Kemi Folorunsho </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
