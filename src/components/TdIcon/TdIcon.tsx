import { icons } from './svg'

export default function TdIcon({ iconName }: { iconName: string }) {
  return <i>{icons[iconName]}</i>
}
