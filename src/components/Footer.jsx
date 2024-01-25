import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from 'lucide-react';
import { Button } from './ui/button';


const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <footer className="text-center border-t border-border py-4">
      <div>
        <div className="flex justify-center items-center space-x-4">
            <p>© {year} AIterImage.<br />All rights reserved.</p>
        </div>
        <div className="flex justify-center items-center space-x-4 mt-4">
            <Button variant="outline"><Link href="https://github.com/Danieldo1"><Github className='text-primary'/></Link> </Button>
            <Button variant="outline"><Link href="https://www.linkedin.com/in/daniil-speranskii/"> <Linkedin className='text-primary' /></Link> </Button>
            <Button variant="outline"><Link href="https://uni-links.vercel.app/daniel"><Image src='unilink.svg' alt='unilink' width={26} height={26} /></Link> </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer