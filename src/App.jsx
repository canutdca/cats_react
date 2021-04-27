import { useCatsService } from './services/useCat.service';
import './App.css'
import { Card } from './components/Card'
import { ListNames } from './components/ListNames'

export function App () {
  const {
    cats,
    changeSelectedCatId,
    catSelected
  } = useCatsService()

  const changeCat = (newCatId) => {
    changeSelectedCatId(newCatId)
  }

  return (
    <div>
      <ListNames list={ cats } click={ changeCat }/>
      <Card cat={ catSelected }/>
    </div>
  );
}

export default App;
