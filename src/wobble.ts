let uppercase = false

export function wobblify (input: string, reset = false) {
  if (reset) uppercase = false

  const buf = Buffer.from(input)

  let i = 0
  for (const c of input) {
    if (/[a-z]/i.test(c)) {
      buf.write(uppercase ? c.toUpperCase() : c.toLowerCase(), i++)
      uppercase = !uppercase
    } else buf.write(c, i++)
  }

  return buf.toString()
}

export default wobblify
