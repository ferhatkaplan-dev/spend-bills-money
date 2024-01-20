function Header() {
  return (
    <header className="bg-white flex flex-col items-center justify-center max-w-screen-lg mx-auto p-8 mt-8 space-y-8">
      <img
        className="rounded-full w-32"
        src="https://neal.fun/spend/billgates.jpg"
        alt=""
      />
      <h1 className="text-3xl font-bold">Spend Bill Gates' Money</h1>
    </header>
  );
}

export default Header;
