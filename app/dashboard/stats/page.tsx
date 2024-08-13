"use client"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { SVGProps, JSX, ClassAttributes, HTMLAttributes } from "react"

export default function Stats() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">ARAM Leaderboard</h1>
        <Link href="#" className="flex items-center gap-2 hover:text-primary-foreground/80 transition" prefetch={false}>
          <UserIcon className="w-5 h-5" />
          <span>Your Profile</span>
        </Link>
      </header>
      <main className="flex-1 grid md:grid-cols-[1fr_2fr] gap-8 p-8">
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Top Players</h2>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Player 1" />
                  <AvatarFallback>P1</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Player 1</div>
                  <div className="text-sm text-muted-foreground">Rank: Challenger</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Win/Loss: 85%</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Player 2" />
                  <AvatarFallback>P2</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Player 2</div>
                  <div className="text-sm text-muted-foreground">Rank: Grandmaster</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Win/Loss: 78%</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Player 3" />
                  <AvatarFallback>P3</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Player 3</div>
                  <div className="text-sm text-muted-foreground">Rank: Master</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Win/Loss: 72%</div>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Your Profile</h2>
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Total Games</div>
                <div className="text-2xl font-bold">1,234</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Win Rate</div>
                <div className="text-2xl font-bold">68%</div>
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Rank Progression</div>
              <LinechartChart className="aspect-[16/9]" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function LinechartChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value: string) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}