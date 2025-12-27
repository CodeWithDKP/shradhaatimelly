const [open, setOpen] = useState(false);

<CommonButton
  label="Add Workshop"
  icon={<FiPlus />}
  onClick={() => setOpen(true)}
/>

<CommonModal
  open={open}
  onClose={() => setOpen(false)}
  title="Add New Workshop"
  width="max-w-xl"
>
  <AddWorkshopForm onSuccess={() => setOpen(false)} />
</CommonModal>
