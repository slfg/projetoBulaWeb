package br.com.amaurymartin.anvisamedicamenth2.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.amaurymartin.anvisamedicamenth2.domain.models.Company;
import br.com.amaurymartin.anvisamedicamenth2.domain.models.Medicament;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {

  @Query(value = "select * from comp m where m.tx_name like concat ('%', :tx_name, '%')", nativeQuery = true)
  public List<Medicament> findByName(@Param("tx_name") String tx_name);
  
  public Optional<Company> findById(Integer id);

}
