import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Testimonials = () => {
  return (
    <section>
        <h2 className="text-3xl font-bold text-center mb-5">Testimonials</h2>
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 mb-10">
                <Card>
                    <CardHeader>
                        <div className='flex flex-row justify-between '>
                            <div>
                            <CardTitle>Jane Smith</CardTitle>
                            <CardDescription>Marketing Director at InnovateTech Solutions</CardDescription>
                            </div>
                            <div>
                                <Avatar>
                                    <AvatarImage src="https://randomuser.me/api/portraits/men/64.jpg" />
                                    <AvatarFallback>JS</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                    <p className='italic'>&apos;AIterImage is a phenomenal tool that has added a touch of creativity to our marketing campaigns. The ability to transform our team&apos;s photos into Disney characters or set unique backgrounds has brought a fun and engaging element to our brand. The simplicity and versatility of AIterImage make it a must-have for any marketing team looking to stand out.&apos;</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                    <div className='flex flex-row justify-between '>
                            <div>
                            <CardTitle>Alex Rodriguez</CardTitle>
                            <CardDescription>Creative Director, PixelCraft Studios</CardDescription>
                            </div>
                            <div>
                                <Avatar>
                                    <AvatarImage src="https://randomuser.me/api/portraits/men/4.jpg" />
                                    <AvatarFallback>AR</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                    <p className='italic'>&apos;As a creative professional, I&apos;m always on the lookout for innovative tools that can elevate our projects. AIterImage has exceeded our expectations in transforming ordinary photos into extraordinary works of art. The precision in background setting and the whimsical Disney character transformations are impressive. It&apos;s become an integral part of our creative toolkit.&apos;</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                    <div className='flex flex-row justify-between '>
                            <div>
                            <CardTitle>Emily Chen</CardTitle>
                            <CardDescription>Founder, DreamPortraits Photography</CardDescription>
                            </div>
                            <div>
                                <Avatar>
                                    <AvatarImage src="https://randomuser.me/api/portraits/women/42.jpg" />
                                    <AvatarFallback>EC</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                    <p className='italic'>&apos;AIterImage has brought a fresh and exciting dimension to our portrait photography business. Our clients love the option to have their portraits transformed into Disney characters or placed in unique settings. The results are consistently stunning, and the user-friendly interface makes the entire process seamless. AIterImage has truly become a valuable asset for our studio.&apos;</p>
                    </CardContent>
                </Card>
            </div>
    </section>
  )
}

export default Testimonials