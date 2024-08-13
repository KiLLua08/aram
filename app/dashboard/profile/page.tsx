
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Profile() {
  return (
    <div className="bg-background rounded-lg border p-6 w-full max-w-md mx-auto flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-primary-foreground text-2xl font-bold">
          Gold
        </div>
        <div className="text-lg font-bold">Rank: Gold</div>
        <div className="text-sm text-muted-foreground">1,234 Points</div>
        <div className="w-full">
          <Progress value={75} aria-label="Progress to next rank" />
        </div>
      </div>
      <Separator />
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold">Leaderboard</h3>
          <Link href="#" className="text-primary hover:underline" prefetch={false}>
            View All
          </Link>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">#</TableHead>
              <TableHead>Player</TableHead>
              <TableHead className="text-right">Points</TableHead>
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
                    <div className="text-xs text-muted-foreground">Challenger</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">5,678</TableCell>
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
                    <div className="text-xs text-muted-foreground">Master</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">4,987</TableCell>
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
                    <div className="text-xs text-muted-foreground">Diamond</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">4,321</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}