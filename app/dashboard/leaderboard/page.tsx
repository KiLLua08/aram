/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Hk1HSWoSF0z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { JSX, SVGProps } from "react"


export default function LeaderBoard() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="text-2xl font-bold" prefetch={false}>
            Aram Leaderboard
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">
            <SearchIcon className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 p-6 md:p-10">
        <div className="grid gap-6">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Leaderboard</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Weekly
                </Button>
                <Button variant="outline" size="sm">
                  Monthly
                </Button>
                <Button variant="outline" size="sm">
                  All Time
                </Button>
              </div>
            </div>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">#</TableHead>
                    <TableHead>Player</TableHead>
                    <TableHead className="text-right">Rank</TableHead>
                    <TableHead className="text-right">W/L</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Shadcn</div>
                          <div className="text-xs text-muted-foreground">@shadcn</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="px-2 py-1 rounded-full">
                        <DiamondIcon className="w-4 h-4 mr-1" />
                        Diamond
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="text-sm">
                        <span className="font-medium">1234</span> / <span className="text-muted-foreground">456</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder-user.jpg" alt="@jaredpalmer" />
                          <AvatarFallback>JP</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Jared Palmer</div>
                          <div className="text-xs text-muted-foreground">@jaredpalmer</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="px-2 py-1 rounded-full">
                        <DiamondPlusIcon className="w-4 h-4 mr-1" />
                        Platinum
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="text-sm">
                        <span className="font-medium">987</span> / <span className="text-muted-foreground">321</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder-user.jpg" alt="@maxleiter" />
                          <AvatarFallback>ML</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Max Leiter</div>
                          <div className="text-xs text-muted-foreground">@maxleiter</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="px-2 py-1 rounded-full">
                        <DiamondPlusIcon className="w-4 h-4 mr-1" />
                        Gold
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="text-sm">
                        <span className="font-medium">654</span> / <span className="text-muted-foreground">789</span>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Player Profile</h2>
            <Card>
              <CardHeader className="bg-muted p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-2xl font-bold">Shadcn</div>
                    <div className="text-sm text-muted-foreground">@shadcn</div>
                  </div>
                  <div className="ml-auto">
                    <Badge variant="outline" className="px-2 py-1 rounded-full">
                      <DiamondIcon className="w-4 h-4 mr-1" />
                      Diamond
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <div className="text-sm text-muted-foreground">Matches Played</div>
                    <div className="text-2xl font-bold">1690</div>
                  </div>
                  <div className="grid gap-2">
                    <div className="text-sm text-muted-foreground">Wins</div>
                    <div className="text-2xl font-bold">1234</div>
                  </div>
                  <div className="grid gap-2">
                    <div className="text-sm text-muted-foreground">Losses</div>
                    <div className="text-2xl font-bold">456</div>
                  </div>
                  <div className="grid gap-2">
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                    <div className="text-2xl font-bold">73%</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted p-6">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Recent Matches</div>
                    <Link href="#" className="text-sm text-primary" prefetch={false}>
                      View All
                    </Link>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder-user.jpg" alt="@jaredpalmer" />
                          <AvatarFallback>JP</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Jared Palmer</div>
                          <div className="text-xs text-muted-foreground">@jaredpalmer</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="px-2 py-1 rounded-full">
                          <WineIcon className="w-4 h-4 mr-1" />
                          Win
                        </Badge>
                        <div className="text-sm text-muted-foreground">20m</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder-user.jpg" alt="@maxleiter" />
                          <AvatarFallback>ML</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Max Leiter</div>
                          <div className="text-xs text-muted-foreground">@maxleiter</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="px-2 py-1 rounded-full">
                          <PhoneMissedIcon className="w-4 h-4 mr-1" />
                          Loss
                        </Badge>
                        <div className="text-sm text-muted-foreground">45m</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

function DiamondIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  )
}


function DiamondPlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 8v8" />
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
      <path d="M8 12h8" />
    </svg>
  )
}


function PhoneMissedIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="22" x2="16" y1="2" y2="8" />
      <line x1="16" x2="22" y1="2" y2="8" />
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function WineIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M8 22h8" />
      <path d="M7 10h10" />
      <path d="M12 15v7" />
      <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
    </svg>
  )
}