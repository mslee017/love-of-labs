const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Adopt', href: '/adopt' },
    { name: 'Foster', href: '/foster' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
  ],
};

export default function Example() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map(item => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-radixGray-11 hover:text-radixViolet-12"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <p className="mt-10 text-center text-xs leading-5 text-radixGray-11">
          &copy; 2023 For the Love of Labs, 54 Hazard Avenue Suite #284 Enfield,
          CT 06082
        </p>
      </div>
    </footer>
  );
}
