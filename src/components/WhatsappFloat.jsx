export default function WhatsappFloat() {
  const handleClick = () => {
    const url = 'https://wa.me/573145032543'
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Abrir chat de WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/80"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-8 w-8 text-white"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16 3C9.372 3 4 8.373 4 15c0 2.088.547 4.035 1.5 5.732L4 29l8.45-1.472A11.87 11.87 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3m0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.84 9.84 0 0 1-3.938-.812l-.281-.118-4.969.867.89-4.836-.145-.25A9.78 9.78 0 0 1 6 15c0-5.514 4.486-10 10-10m5.004 11.988c-.273-.136-1.615-.797-1.865-.887s-.432-.136-.613.137-.703.887-.863 1.07-.318.205-.59.068c-1.599-.799-2.648-1.427-3.701-3.236-.279-.48.28-.446.8-1.488.089-.179.045-.334-.023-.471-.068-.136-.613-1.477-.84-2.021-.221-.53-.448-.458-.613-.466l-.523-.009c-.18 0-.47.067-.716.334s-.94.918-.94 2.239.963 2.597 1.098 2.777c.136.179 1.895 2.896 4.59 4.061.642.277 1.142.443 1.531.567.643.204 1.229.175 1.693.106.516-.077 1.615-.66 1.844-1.298.228-.638.228-1.185.159-1.298-.068-.111-.251-.179-.523-.315"
        />
      </svg>
    </button>
  )
}
