import TdIcon from '../TdIcon/TdIcon'

const AccordionItem = ({
  faq,
  isOpen,
  onClick,
  questionStyle,
  answerStyle,
}: {
  faq: { question: string; answer: string }
  isOpen: boolean
  answerStyle?: string
  questionStyle?: string
  onClick: () => void
}) => {
  return (
    <div className='border-b border-[#414245] pb-6 pt-2'>
      <button
        className='w-full p-4 text-left bg-gray-100 hover:bg-gray-200 flex justify-between items-center focus:outline-none'
        onClick={onClick}
      >
        <p className={`text-white text-xl font-bold lato ${questionStyle}`}>
          {faq.question}
        </p>
        <span className='cursor-pointer'>
          {isOpen ? (
            <TdIcon iconName='minusIocn' />
          ) : (
            <TdIcon iconName='plusIcon' />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className={`p-4 text-base text-white lato ${answerStyle}`}>
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export default AccordionItem
