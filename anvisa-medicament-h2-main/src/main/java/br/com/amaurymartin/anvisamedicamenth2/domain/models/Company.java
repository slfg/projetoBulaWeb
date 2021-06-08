package br.com.amaurymartin.anvisamedicamenth2.domain.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;;

@Entity
@Table(name = "comp")
public class Company implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_com")
	private Integer id;
	
	@OneToMany (mappedBy = "tx_lab")
	@Column(name = "tx_name", columnDefinition = "text", nullable = false)
	private List<Medicament> tx_name;
	
	
	public Company() {
		
	}
	
	public Company(Integer id, List<Medicament> tx_name) {
		super();
		this.id = id;
		this.tx_name = tx_name;
	}
	
	public Company (Company entity) {
		super();
		this.id = entity.getId();
		this.tx_name = entity.getTx_name();
	}

	public Integer getId() {
		return id;
	}
	
	public Company setId(Integer id) {
		this.id = id;
		return this;
	}
	
	public List<Medicament> getTx_name() {
		return tx_name;
	}
	
	public Company setTx_name(List<Medicament> tx_name) {
		this.tx_name = tx_name;
		return this;
	}
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((tx_name == null) ? 0 : tx_name.hashCode());
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Company other = (Company) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (tx_name == null) {
			if (other.tx_name != null)
				return false;
		} else if (!tx_name.equals(other.tx_name))
			return false;
		return true;
	}
	
}
