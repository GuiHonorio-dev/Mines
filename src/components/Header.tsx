import Image from "next/image"

export function Header() {
  return (
    <header className="w-screen h-32   border-b-2 border-zinc-700">
      <Image src="/public/logo.png" alt="Logo da blaze" width={100} height={100}/>
      
    </header>
  )
}