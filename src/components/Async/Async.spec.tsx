import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { Async } from '.'

test('it renders correctly', async () => {
  render(<Async />)


  expect(screen.getByText('Hello')).toBeInTheDocument()


  /**
   * Tenta achar um elemento
   */
  // expect(await screen.findByText('Button')).toBeInTheDocument()



  await waitForElementToBeRemoved(screen.queryByText('Button'))

  // await waitFor(() => {
  //   return expect(screen.queryByText('Button')).not.toBeInTheDocument
  // })

})