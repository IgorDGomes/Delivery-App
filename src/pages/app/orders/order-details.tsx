import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// interface OrderDetailsProps {}

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order: B23jc1NCasd2e</DialogTitle>
        <DialogDescription>Orders Detail</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pending
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Client</TableCell>
              <TableCell className="flex justify-end">Somebody IDK</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Phone</TableCell>
              <TableCell className="flex justify-end">
                +351 9999999999
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                Somebody@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realized at
              </TableCell>
              <TableCell className="flex justify-end">3 minutes ago</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">SubTotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Pepperoni</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">€ 30.50</TableCell>
              <TableCell className="text-right">€ 61.00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pizza Portuguesa</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">€ 25.00</TableCell>
              <TableCell className="text-right">€ 50.00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total Order</TableCell>
              <TableCell className="text-right font-medium">€ 111.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
