import previewImg from "@/assets/images/preview.png"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { pricingList } from "@/data/pricing"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="h-full w-full md:pt-44 md:mt-0 mt-[-200px] relative flex items-center justify-center flex-col">
        <div className={cn(`
          absolute bottom-0 left-0 right-0 top-0
          bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] 
          bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]
          -z-10
        `)}/>

        <p className="text-center">Run your agency, in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-7xl font-bold text-center md:text-[150px]">Haami.Dev</h1>
        </div>

        <div className="flex justify-center items-center relative md:mt-[-10px]">
          <Image src={previewImg}
                 alt="banner image"
                 width={1200}
                 height={1200}
                 className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"/>
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"/>
        </div>
      </section>

      <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-250px]">
        <h2 className="text-4xl text-center">
          Choose what fits you right
        </h2>
        <p className="text-muted-foreground text-center">
          Our straightforward pricing plans are tailored to meet your needs. If {" you're"} not <br/>
          ready to commit you can get started for free.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mt-6">
          {pricingList.map((pricing) => (
            <Card key={pricing.name}
                  className={cn("w-[300px] flex flex-col justify-between", {
                    "border-2 border-primary": pricing.name === "unlimited",
                  })}>
              <CardHeader>
                <CardTitle className={cn("", {
                  "text-muted-foreground": pricing.name !== "unlimited",
                })}>
                  {pricing.title}
                </CardTitle>
                <CardDescription>{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <span className="text-4xl font-bold">{pricing.price}</span>
                <span className="text-muted-foreground">/m</span>
              </CardContent>

              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {pricing.features.map((feature, index) => (
                    <div key={index} className="flex gap-2">
                      <Check className="text-muted-foreground"/>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link href={`/agency?plan=${pricing.name}`}
                      className={cn(
                        "w-full text-center bg-primary p-2 rounded-md",
                        {
                          "!bg-muted-foreground": pricing.name !== "unlimited",
                        }
                      )}>
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
