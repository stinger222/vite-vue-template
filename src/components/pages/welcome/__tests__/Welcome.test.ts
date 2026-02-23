import { test, expect, describe } from 'vitest'
import { fireEvent, render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Welcome from '../Welcome.vue'

describe("Testing Welcome page", () => {

  test('Renders greeting', () => {
    const { getByText } = render(Welcome)
    expect(getByText('よろしく!')).toBeVisible()
  })

  test("Counter works properly", async () => {
    const { getByRole, getByText } = render(Welcome)
    expect(getByText("Count: 0")).toBeVisible()
    
    const button = getByRole('button', {"name": '+'})
    expect(button).toBeVisible()
    await fireEvent.click(button)
    expect(getByText("Count: 1")).toBeVisible()
    await fireEvent.click(button)
    await fireEvent.click(button)
    expect(getByText("Count: 3")).toBeVisible()
  })
})