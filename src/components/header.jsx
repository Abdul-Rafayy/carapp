function Header() {
    return(
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" className='h-10 w-10 rounded-full' alt=""  />
        
      <span className="ml-3 text-xl">Cars Arena</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" href='#'>Home</a>
      <a className="mr-5 hover:text-gray-900" href='#'>Services</a>
      <a className="mr-5 hover:text-gray-900" href='#'>About Us</a>
      <a className="mr-5 hover:text-gray-900" href='#'>Contact Us</a>
    </nav>
    <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
      Login
        </button>
  </div>
</header>
    )
    
}
export default Header