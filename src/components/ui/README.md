# Description
This dir used by shadcn/vue to store all installed components.
The only thing you're interested in here is _index.ts_ for re-exporting.

Re-exporting allows to imoprt { AnyComponent } from "@/components/ui" without bothering about where it comes from exactly.
But it doesn't mean you can't specify it. For complex pages with dozens upon dozens of components and sub-components being imported, you may want to split things up.

Like, leave Buttons and other simple stuff imported from "@/components/ui":
```javascript
import { Button, Badge, sonner, etc } from "@/components/ui"
```

But for something more complex you can go:

```javascript
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
```
